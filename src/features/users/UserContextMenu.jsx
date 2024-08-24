import { TbLogout, TbUser } from "react-icons/tb";
import ContextMenu from "../../ui/ContextMenu";
import { useNavigate } from "react-router-dom";
import useLogout from "./useLogout";
import useMainContext from "../../ui/layout/useMainContext";

function UserContextMenu({ children, position = "center" }) {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { scrollMainToTop } = useMainContext();

  const options = [
    {
      title: "Profile",
      icon: <TbUser />,
      handler: () => {
        scrollMainToTop();
        navigate("/account");
      },
      closeAfterClick: true,
    },
    {
      title: "Log out",
      icon: <TbLogout />,
      handler: logout,
      closeAfterClick: true,
    },
  ];

  return (
    <ContextMenu options={options} position={position}>
      {children}
    </ContextMenu>
  );
}

export default UserContextMenu;
