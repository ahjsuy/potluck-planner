import Navbar from "../components/navbar";
import LogoutButton from "../components/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const CallbackPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="page-bg">
      <Navbar />
      <h1>HEHE CONTENT</h1>
      {<LogoutButton>Log Out</LogoutButton>}
    </div>
  );
};

export default CallbackPage;
