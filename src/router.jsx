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
import ArtistPage from "./pages/ArtistPage";
import PageNotFound from "./pages/PageNotFound";
import AlbumPage from "./pages/AlbumPage";
import TrackPage from "./pages/TrackPage";
import PlaylistPage from "./pages/PlaylistPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ui/layout/page/ProtectedRoute";
import AppLayout from "./ui/layout/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = ({ isSmall }) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "library",
          element: isSmall ? <LibraryPage /> : <Navigate replace to="/" />,
        },
        {
          path: "category/:id",
          element: <CategoryPage />,
        },
        {
          path: "account",
          element: <AccountCenterPage />,
        },
        {
          path: "account/top/tracks",
          element: (
            <SectionPage>
              <UsersTopTracks all={true} />
            </SectionPage>
          ),
        },
        {
          path: "account/top/artists",
          element: (
            <SectionPage>
              <UsersTopArtists all={true} />
            </SectionPage>
          ),
        },
        {
          path: "account/following",
          element: (
            <SectionPage>
              <UsersFollowings all={true} />
            </SectionPage>
          ),
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "artist/:id",
          element: <ArtistPage />,
        },
        {
          path: "artist/:id/discography",
          element: (
            <SectionPage>
              <Discography all={true} />
            </SectionPage>
          ),
        },
        {
          path: "artist/:id/appears-on",
          element: (
            <SectionPage>
              <AppearsOn all={true} />
            </SectionPage>
          ),
        },
        {
          path: "artist/:id/fans-also-like",
          element: (
            <SectionPage>
              <RelatedArtists all={true} />
            </SectionPage>
          ),
        },
        {
          path: "album/:id",
          element: <AlbumPage />,
        },
        {
          path: "album/:id/more-by-artist",
          element: (
            <SectionPage>
              <MoreByArtist all={true} />
            </SectionPage>
          ),
        },
        {
          path: "track/:id",
          element: <TrackPage />,
        },
        {
          path: "playlist/:id",
          element: <PlaylistPage />,
        },
        {
          path: "playlist/:id/might-also-like",
          element: (
            <SectionPage>
              <AlsoLikePlaylists all={true} />
            </SectionPage>
          ),
        },
        {
          path: "section",
          element: <SectionPage />,
          children: [
            {
              path: "recently-played",
              element: <RecentlyPlayed all={true} />,
            },
            {
              path: "featured-playlists",
              element: <FeaturedPlaylists all={true} />,
            },
            {
              path: "new-releases",
              element: <NewReleases all={true} />,
            },
          ],
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

export default router;
