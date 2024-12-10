import { useAuth0 } from "@auth0/auth0-react";

interface buttonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const SignupButton = ({ children, style }: buttonProps) => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button
      className="btn btn-sm btn-primary me-2 lisu-bosa-regular"
      type="button"
      style={style}
      onClick={handleSignUp}
    >
      {children}
    </button>
  );
};

export default SignupButton;
