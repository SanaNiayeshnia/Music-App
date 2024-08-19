import useCurrentUser from "../features/users/useCurrentUser";
import PageBody from "../ui/PageBody";
import Spinner from "../ui/Spinner";
import TopNav from "../ui/TopNav";
import PersonPageHeader from "../ui/PersonPageHeader";
import UsersTopTracks from "../features/users/UsersTopTracks";
import UsersTopArtists from "../features/users/UsersTopArtists";
import UsersFollowings from "../features/users/UsersFollowings";
import { setPageTitle } from "../GlobalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AccountCenterPage() {
  const { isLoading: isLoadingUser, user } = useCurrentUser();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(user?.display_name));

    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch, user]);

  return (
    <div className="h-full w-full">
      <TopNav />
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
