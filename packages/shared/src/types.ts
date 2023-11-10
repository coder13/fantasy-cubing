export type ApiCompetition = {
  id: string;
  name: string;
  city: string;
  competitor_limit: number;
  country_iso2: string;
  start_date: string;
  end_date: string;
  cancelled_at: string | null;
  event_ids: string[];
};

export type ApiResult = {
  id: number;
  pos: number;
  best: number;
  average: number;
  name: string;
  country_iso2: string;
  competition_id: string;
  event_id: string;
  round_type_id: string;
  format_id: string;
  wca_id: string;
  attempts: [number, number, number, number, number];
  best_index: number;
  worst_index: number;
  regional_single_record: string;
  regional_average_record: string;
};
