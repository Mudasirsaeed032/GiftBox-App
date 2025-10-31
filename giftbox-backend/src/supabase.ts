import { createClient } from '@supabase/supabase-js';
import { ENV } from './env';

// Admin client (service role) – server only
export const supabaseAdmin = createClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

// Public client – useful if you want to validate a user token
export const supabaseAnon = createClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_ANON_KEY,
  { auth: { persistSession: false } }
);
