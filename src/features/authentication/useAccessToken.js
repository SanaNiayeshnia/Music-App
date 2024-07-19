import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAccessToken,
  refreshAccessToken,
} from "../../services/authenticationApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "./authSlice";
import { useEffect } from "react";

function useAccessToken() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refreshToken, expiresAt } = useSelector(
    (store) => store.authentication,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  let queryFunc;

  //check if there is a refresh token from the last time the user has been logged in
  queryFunc = refreshToken
    ? () => refreshAccessToken(refreshToken)
    : () => getAccessToken(code);

  //get access token
  const { isLoading, data } = useQuery({
    queryKey: ["access-token"],
    queryFn: queryFunc,
    staleTime: refreshToken ? expiresAt - Date.now() - 60000 : 0,
    enabled: Boolean(refreshToken || code),
  });

  useEffect(() => {
    //store token data in local storage and redux authentication slice
    if (data) {
      dispatch(
        setAccessToken({
          accessToken: data?.access_token,
          expiresAt: data?.expiresAt,
          refreshToken: data?.refresh_token,
        }),
      );
      //remove the code param from the url cause its a one time use
      searchParams.delete("code");
      setSearchParams(searchParams);
    }
  }, [data, dispatch, navigate, searchParams, setSearchParams]);

  useEffect(() => {
    // Refresh query 1 minute before expiry
    if (expiresAt) {
      const timeoutDuration = expiresAt - Date.now() - 60000;
      if (timeoutDuration > 0) {
        const timer = setTimeout(() => {
          queryClient.invalidateQueries(["access-token"]);
        }, timeoutDuration);

        return () => clearTimeout(timer);
      }
    }
  }, [expiresAt, queryClient]);

  return {
    isLoading,
    data,
    isAuthenticated: data?.expiresAt > Date.now() || false,
  };
}

export default useAccessToken;
