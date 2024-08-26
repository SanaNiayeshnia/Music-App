import useCurrentUser from "../features/authentication/hooks/useCurrentUser";
import PageBody from "../ui/layout/page/PageBody";
import Spinner from "../ui/Spinner";
import TopNav from "../ui/layout/topNav/TopNav";
import PersonPageHeader from "../ui/layout/page/PersonPageHeader";
import UsersTopTracks from "../features/users/UsersTopTracks";
import UsersTopArtists from "../features/users/UsersTopArtists";
import UsersFollowings from "../features/users/UsersFollowings";
import Page from "../ui/layout/page/Page";
import IconLogo from "../ui/layout/topNav/IconLogo";
import useMainContext from "../ui/layout/Main/useMainContext";
import NavTitle from "../ui/layout/topNav/NavTitle";

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
