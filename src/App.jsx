import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "./utilities/theme";
import AppLayout from "./ui/layout/AppLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ArtistPage from "./pages/ArtistPage";
import PageNotFound from "./pages/PageNotFound";
import AlbumPage from "./pages/AlbumPage";
import TrackPage from "./pages/TrackPage";
import PlaylistPage from "./pages/PlaylistPage";
import SearchResults from "./features/searchAndDiscovery/SearchResults";
import DefaultSearchPageContent from "./features/searchAndDiscovery/DefaultSearchPageContent";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const { isDarkMode } = useSelector((store) => store.global);
  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ThemeProvider theme={theme}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "0.75rem" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "0.9rem",
              padding: "1rem",
              backgroundColor: "white",
              color: "balck",
              border: "1px solid black",
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />}>
                <Route index element={<DefaultSearchPageContent />} />
                <Route path=":query" element={<SearchResults />} />
              </Route>
              <Route path="artist/:id" element={<ArtistPage />} />
              <Route path="album/:id" element={<AlbumPage />} />
              <Route path="track/:id" element={<TrackPage />} />
              <Route path="playlist/:id" element={<PlaylistPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
