import { useOutletContext } from "@remix-run/react";
import { type OutletContext } from "~/types";

export function useSupabaseClient() {
  const { supabaseClient } = useOutletContext<OutletContext>();

  if (!supabaseClient) {
    throw new Error(
      "'supabaseClient' property from useOutletContext is not defined"
    );
  }

  return supabaseClient;
}
