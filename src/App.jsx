import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "./utilities/theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { setIsOnline } from "./features/authentication/authSlice";
import { RouterProvider } from "react-router-dom";
import routerFn from "./router";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const { isDarkMode, isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();

  useEffect(() => {
    //set dark class for root element based on localstorage mode property
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    //change connection state(offline/online) based on user connection
    function changeConnectionState() {
      dispatch(setIsOnline(navigator.onLine));
    }
    window.addEventListener("online", changeConnectionState);
    window.addEventListener("offline", changeConnectionState);
    return () => {
      window.removeEventListener("online", changeConnectionState);
      window.removeEventListener("offline", changeConnectionState);
    };
  }, [dispatch]);

  const router = routerFn({ isSmall });

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Toaster
          position="bottom-center"
          gutter={12}
          containerStyle={{ margin: "0.75rem" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            duration: 3000,
            style: {
              fontSize: "15px",
              padding: "1rem 0.5rem",
              backgroundColor: "white",
              color: "balck",
              fontWeight: "500",
            },
          }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
