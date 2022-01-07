import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";
import { useAuth } from "./useAuth";

export function useUser() {
  const user = useAuth().user();
  return useQuery(["user", user?.id], async () => {
    const { data, error } = await supabase.from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }, {
    disabled: !!user,
  });
}
