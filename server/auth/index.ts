import { Request, Router } from "express";
import prisma from "../lib/db";

const router = Router();

const WCA_ORIGIN =
  process.env.WCA_ORIGIN ?? 'https://staging.worldcubeassociation.org';
const CLIENT_ID = process.env.CLIENT_ID ?? 'example-application-id';
const CLIENT_SECRET = process.env.CLIENT_SECRET ?? 'example-secret';
const REDIRECT_URI = `http://localhost:${process.env.PORT}/auth/wca/callback`;
const SCOPE = 'public email';

router.get('/auth/wca', (req, res) => {
  const redirectUri = req.get('Referer') ?? REDIRECT_URI;

  const url = new URL('/oauth/authorize', WCA_ORIGIN);
  url.searchParams.set('client_id', CLIENT_ID);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', SCOPE);
  url.searchParams.set('redirect_uri', redirectUri);

  res.redirect(url.toString());
});

router.get('/auth/wca/callback', async (req: Request, res) => {
  const redirectUri: string = req.get('Referer') ?? REDIRECT_URI;

  const code = req.query.code as string;

  if (typeof code !== 'string') {
    res.status(400).send('Missing code');
    return;
  }

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
    code,
  });

  try {
    const response = await fetch(`${WCA_ORIGIN}/oauth/token`, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      throw await response.text();
    }

    const wcaTokens = await response.json() as {
      access_token: string;
    };

    const wcaUserResponse = await fetch(`${WCA_ORIGIN}/api/v0/me`, {
      headers: {
        Authorization: `Bearer ${wcaTokens.access_token}`,
      },
    });

    if (!wcaUserResponse.ok) {
      throw await wcaUserResponse.text();
    }

    const wcaUser = (await wcaUserResponse.json()) as {
      me: {

        name: string;
        email: string;
        avatar: {
          url: string;
          thumb_url: string;
        }
      }
    };

    console.log(77, wcaUser);

    const user = await prisma.user.upsert({
      where: {
        email: wcaUser.me.email,
      },
      update: {
        name: wcaUser.me.name,
        email: wcaUser.me.email,
        avatar: wcaUser.me.avatar?.url,
      },
      create: {
        name: wcaUser.me.name,
        email: wcaUser.me.email,
        avatar: wcaUser.me.avatar?.url,
      },
    });

    req.session.userId = user.id;
    req.user = user;

    res.json({
      user,
      message: 'Successfully logged in',
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: 'Failed to log in',
    });
  }
});

export default router;
