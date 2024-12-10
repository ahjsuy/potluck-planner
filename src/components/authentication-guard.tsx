import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BeatLoader } from "react-spinners";

interface componentType {
  component: React.FC;
}

const AuthenticationGuard = ({ component }: componentType) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <BeatLoader />
      </div>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;
