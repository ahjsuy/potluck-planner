import { useAuth0 } from "@auth0/auth0-react";

interface buttonProps {
  children: React.ReactNode;
}

const LogoutButton = ({ children }: buttonProps) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      className="btn btn-sm btn-primary me-2 lisu-bosa-regular"
      type="button"
      style={{
        backgroundColor: "#DF8955",
        border: "none",
        fontSize: "14px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      onClick={handleLogout}
    >
      {children}
    </button>
  );
};

export default LogoutButton;
