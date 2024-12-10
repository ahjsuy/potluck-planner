import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CallbackPage from "./pages/callback";
import Create from "./pages/create";
import Profile from "./pages/profile";
import { BeatLoader } from "react-spinners";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./components/authentication-guard";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <BeatLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/create"
        element={<AuthenticationGuard component={Create} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={Profile} />}
      />
    </Routes>
  );
};

export default App;
