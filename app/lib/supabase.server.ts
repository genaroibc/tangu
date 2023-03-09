import { createServerClient } from "@supabase/auth-helpers-remix";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types/db";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL)
  throw new Error("'SUPABASE_URL' env variable is not defined");
if (!SUPABASE_ANON_KEY)
  throw new Error("'SUPABASE_ANON_KEY' env variable is not defined");

export const supabaseClient = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

export const createSupabaseServerClient = (
  request: Request,
  response: Response
) =>
  createServerClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    request,
    response,
  });
