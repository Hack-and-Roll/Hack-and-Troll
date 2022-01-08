import { useMutation, useQueryClient } from "react-query";
import { supabase } from "../supabaseClient";
import { useAuth } from "./useAuth";

export function useRollRandomComponent() {
  const queryClient = useQueryClient();
  const user = useAuth().user();
  return useMutation(async (component_type) => {
    const { data, error } = await supabase.rpc("roll_random_component", {
      component_type
    })
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }, {
    onSuccess(data) {
      queryClient.invalidateQueries(["user", user?.id]);
      const queryData = queryClient.getQueryData(["assets", user?.id]);
      console.log(queryData);
      if (!queryData || !queryData.length || !queryData.find((asset) => !asset.completed)) {
        queryClient.invalidateQueries(["assets", user?.id]);
      } else {
        queryClient.setQueryData(["assets", user?.id], (current) => {
          return (current || []).map((asset) => {
            if (!asset.completed) {
              return {
                ...asset,
                [data.type]: data,
              };
            }

            return asset;
          });
        });
      }
    }
  });
}
