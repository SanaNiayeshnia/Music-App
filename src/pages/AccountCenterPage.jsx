import useCurrentUser from "../features/users/useCurrentUser";
import NavTitle from "../ui/NavTitle";
import PageBody from "../ui/PageBody";
import Spinner from "../ui/Spinner";
import TopNav from "../ui/TopNav";
import useMainContext from "../ui/layout/useMainContext";
import PersonPageHeader from "../ui/PersonPageHeader";

function AccountCenterPage() {
  const { isMainScrolled } = useMainContext();
  const { isLoading: isLoadingUser, user } = useCurrentUser();
  console.log(user);
  return (
    <div className="h-full w-full">
      <TopNav>
        {isMainScrolled && <NavTitle>{user?.display_name}</NavTitle>}
      </TopNav>
      {isLoadingUser ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PersonPageHeader person={user} />
          <PageBody></PageBody>
        </>
      )}
    </div>
  );
}

export default AccountCenterPage;
