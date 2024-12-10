import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginButton";
import SignupButton from "./signupButton";
import LogoutButton from "./logoutButton";

const Navbar = () => {
  const { isAuthenticated, user, error, isLoading } = useAuth0();

  console.log("Is Authenticated:", isAuthenticated);
  console.log("User Info:", user);
  console.log("Error:", error);
  console.log("Loading State:", isLoading);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <text className="just-another-hand-regular"> Potluck Planner </text>
          <img
            src="src\assets\turkey-chicken-svgrepo-com.svg"
            width="24px"
            height="24px"
            className="d-inline-block align-text-top"
            style={{ marginLeft: "10px" }}
          ></img>
        </a>
        <nav className="navbar bg-body-tertiary">
          <form
            className="container-fluid justify-content-start"
            style={{ gap: "15px" }}
          >
            {!isAuthenticated && <LoginButton> Log In </LoginButton>}
            {!isAuthenticated && (
              <SignupButton
                style={{
                  backgroundColor: "#DF8955",
                  border: "none",
                }}
              >
                {" "}
                Sign Up{" "}
              </SignupButton>
            )}
            {isAuthenticated && <LogoutButton>Log Out</LogoutButton>}
          </form>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
