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

const client = new QueryClient();

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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="artist/:id" element={<ArtistPage />} />
              <Route path="album/:id" element={<AlbumPage />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
