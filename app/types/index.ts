import { type SupabaseClient } from "@supabase/supabase-js";
import { type Database } from "~/types/db";

export type OutletContext = {
  supabaseClient: SupabaseClient<Database>;
};
