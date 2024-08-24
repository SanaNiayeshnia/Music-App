import useCurrentUser from "../features/users/useCurrentUser";
import PageBody from "../ui/PageBody";
import Spinner from "../ui/Spinner";
import TopNav from "../ui/TopNav";
import PersonPageHeader from "../ui/PersonPageHeader";
import UsersTopTracks from "../features/users/UsersTopTracks";
import UsersTopArtists from "../features/users/UsersTopArtists";
import UsersFollowings from "../features/users/UsersFollowings";

import Page from "../ui/Page";
import IconLogo from "../ui/IconLogo";
import useMainContext from "../ui/layout/useMainContext";
import NavTitle from "../ui/NavTitle";

function AccountCenterPage() {
  const { isLoading: isLoadingUser, user } = useCurrentUser();
  const { isMainScrolled } = useMainContext();

  return (
    <Page>
      <TopNav>
        {isMainScrolled && (
          <NavTitle noPlayButton>
            <IconLogo noTitle /> {user?.display_name}
          </NavTitle>
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
    </Page>
  );
}

export default AccountCenterPage;
