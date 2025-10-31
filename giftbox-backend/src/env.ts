import 'dotenv/config';

const required = (key: string) => {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
};

export const ENV = {
  PORT: parseInt(process.env.PORT || '8080', 10),
  CORS_ORIGIN: required('CORS_ORIGIN'),
  SUPABASE_URL: required('SUPABASE_URL'),
  SUPABASE_ANON_KEY: required('SUPABASE_ANON_KEY'),
  SUPABASE_SERVICE_ROLE_KEY: required('SUPABASE_SERVICE_ROLE_KEY'),
};
