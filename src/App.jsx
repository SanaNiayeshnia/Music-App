import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "./utilities/theme";
import AppLayout from "./ui/layout/AppLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtistPage from "./pages/ArtistPage";
import PageNotFound from "./pages/PageNotFound";
import AlbumPage from "./pages/AlbumPage";
import TrackPage from "./pages/TrackPage";
import PlaylistPage from "./pages/PlaylistPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ui/layout/page/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { setIsOnline } from "./features/authentication/authSlice";
import SectionPage from "./pages/SectionPage";
import RecentlyPlayed from "./features/player/RecentlyPlayed";
import MoreByArtist from "./features/artists/MoreByArtist";
import AlsoLikePlaylists from "./features/playlists/AlsoLikePlaylists";
import Discography from "./features/artists/Discography";
import RelatedArtists from "./features/artists/RelatedArtists";
import AppearsOn from "./features/artists/AppearsOn";
import FeaturedPlaylists from "./features/playlists/FeaturedPlaylists";
import NewReleases from "./features/albums/NewReleases";
import AccountCenterPage from "./pages/AccountCenterPage";
import UsersTopTracks from "./features/users/UsersTopTracks";
import UsersTopArtists from "./features/users/UsersTopArtists";
import UsersFollowings from "./features/users/UsersFollowings";
import LibraryPage from "./pages/LibraryPage";
import CategoryPage from "./pages/CategoryPage";

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
              fontSize: "1rem",
              padding: "1rem 0.5rem",
              backgroundColor: "white",
              color: "balck",
              fontWeight: "500",
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
              <Route
                path="library"
                element={
                  isSmall ? <LibraryPage /> : <Navigate replace to="/" />
                }
              />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="account" element={<AccountCenterPage />} />
              <Route
                path="account/top/tracks"
                element={
                  <SectionPage>
                    <UsersTopTracks all={true} />
                  </SectionPage>
                }
              />
              <Route
                path="account/top/artists"
                element={
                  <SectionPage>
                    <UsersTopArtists all={true} />
                  </SectionPage>
                }
              />
              <Route
                path="account/following"
                element={
                  <SectionPage>
                    <UsersFollowings all={true} />
                  </SectionPage>
                }
              />
              <Route path="search" element={<SearchPage />} />
              <Route path="artist/:id" element={<ArtistPage />} />
              <Route
                path="artist/:id/discography"
                element={
                  <SectionPage>
                    <Discography all={true} />
                  </SectionPage>
                }
              />
              <Route
                path="artist/:id/appears-on"
                element={
                  <SectionPage>
                    <AppearsOn all={true} />
                  </SectionPage>
                }
              />
              <Route
                path="artist/:id/fans-also-like"
                element={
                  <SectionPage>
                    <RelatedArtists all={true} />
                  </SectionPage>
                }
              />
              <Route path="album/:id" element={<AlbumPage />} />
              <Route
                path="album/:id/more-by-artist"
                element={
                  <SectionPage>
                    <MoreByArtist all={true} />
                  </SectionPage>
                }
              />
              <Route path="track/:id" element={<TrackPage />} />
              <Route path="playlist/:id" element={<PlaylistPage />} />
              <Route
                path="playlist/:id/might-also-like"
                element={
                  <SectionPage>
                    <AlsoLikePlaylists all={true} />
                  </SectionPage>
                }
              />
              <Route path="section/" element={<SectionPage />}>
                <Route
                  path="recently-played"
                  element={<RecentlyPlayed all={true} />}
                />
                <Route
                  path="featured-playlists"
                  element={<FeaturedPlaylists all={true} />}
                />
                <Route
                  path="new-releases"
                  element={<NewReleases all={true} />}
                />
              </Route>
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
