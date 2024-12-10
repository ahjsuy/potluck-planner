import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface childrenType {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: childrenType) => {
  const navigate = useNavigate();

  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const domain = "https://dev-renjsh7vxzbk0u0q.us.auth0.com";
  const clientId = "RRRJ8PMwKWKnRmLmhMKzo6Y0VDUU5lzZ";
  const redirectUri = "http://localhost:4040/callback";

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
