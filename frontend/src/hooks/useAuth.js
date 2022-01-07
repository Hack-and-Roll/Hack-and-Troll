import { useEffect, useReducer } from "react";

import { supabase } from "../supabaseClient";

/**
 * Hook that watches for and returns the auth state.
 */
export function useAuth() {
  const [, forceRender] = useReducer((x) => x + 1, 0);

  // Subscribe to auth state changes when on browser and force caller component of this hook to
  // re-render when there are auth state changes.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { data, error } = supabase.auth.onAuthStateChange(forceRender);

    if (error || !data) {
      throw error ?? new Error("No data.");
    }
  }, [forceRender]);

  // Return auth object.
  return supabase.auth;
}
