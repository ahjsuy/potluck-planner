import { useAuth0 } from "@auth0/auth0-react";

interface buttonProps {
  children: React.ReactNode;
}

const LoginButton = ({ children }: buttonProps) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button
      className="btn btn-sm btn-outline-secondary lisu-bosa-regular"
      type="button"
      style={{}}
      onClick={handleLogin}
    >
      {children}
    </button>
  );
};

export default LoginButton;
