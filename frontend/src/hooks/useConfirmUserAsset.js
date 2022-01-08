import { useMutation, useQueryClient } from "react-query";
import { supabase } from "../supabaseClient";
import { useAuth } from "./useAuth";

export function useConfirmUserAsset() {
  const queryClient = useQueryClient();
  const user = useAuth().user();
  return useMutation(async (asset_id) => {
    const { data, error } = await supabase.rpc("confirm_user_asset", {
      asset_id
    })
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }, {
    onSuccess(data) {
      queryClient.setQueryData(["assets", user?.id], (current) => {
        return (current || []).map((asset) => {
          if (asset.id === data.id) {
            return {
              ...asset,
              completed: true
            };
          }

          return asset;
        });
      });
    }
  });
}
