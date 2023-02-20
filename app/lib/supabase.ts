import { createClient } from "@supabase/supabase-js";

export function supabase() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  if (!SUPABASE_URL)
    throw new Error("'SUPABASE_URL' env variable is not defined");
  if (!SUPABASE_ANON_KEY)
    throw new Error("'SUPABASE_ANON_KEY' env variable is not defined");

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
