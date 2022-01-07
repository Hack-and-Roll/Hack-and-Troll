import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";
import { useAuth } from "./useAuth";

export function useAssets() {
  const user = useAuth().user();
  return useQuery(["assets", user?.id], async () => {
    const { data, error } = await supabase.from("assets")
      .select(`
        id,
        created_at,
        updated_at,
        completed,
        background:background_id(*),
        face:face_id(*),
        hat:hat_id(*),
        hands:hands_id(*),
        body:body_id(*),
        pet:pet_id(*),
        user_id
      `)
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }

    return data;
  }, {
    disabled: !!user,
  });
}
