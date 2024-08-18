import useCurrentUser from "../features/users/useCurrentUser";
import NavTitle from "../ui/NavTitle";
import PageBody from "../ui/PageBody";
import Spinner from "../ui/Spinner";
import TopNav from "../ui/TopNav";
import useMainContext from "../ui/layout/useMainContext";
import PersonPageHeader from "../ui/PersonPageHeader";
import UsersTopTracks from "../features/users/UsersTopTracks";
import UsersTopArtists from "../features/users/UsersTopArtists";
import UsersFollowings from "../features/users/UsersFollowings";

function AccountCenterPage() {
  const { isMainScrolled } = useMainContext();
  const { isLoading: isLoadingUser, user } = useCurrentUser();
  return (
    <div className="h-full w-full">
      <TopNav>
        {isMainScrolled && (
          <NavTitle noPlayButton>{user?.display_name}</NavTitle>
        )}
      </TopNav>
      {isLoadingUser ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PersonPageHeader person={user} />
          <PageBody>
            <UsersTopTracks />
            <UsersTopArtists />
            <UsersFollowings />
          </PageBody>
        </>
      )}
    </div>
  );
}

export default AccountCenterPage;
