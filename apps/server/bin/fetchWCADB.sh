echo fetching WCA DB
wget https://www.worldcubeassociation.org/results/misc/WCA_export.sql.zip -O /tmp/WCA_export.sql.zip
unzip -f /tmp/WCA_export.sql.zip -d /tmp

MYSQL_HOST=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' fantasy-cubing-2023-db-1)
PORT=3306
USER=user
PASSWORD=user
DB=wca

echo connecting to $MYSQL_HOST

mysql -h $MYSQL_HOST -P $PORT --protocol=tcp -u $USER -p $DB --password=$PASSWORD < /tmp/WCA_export.sql

echo DB fetched
