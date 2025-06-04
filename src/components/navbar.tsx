import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginButton";
import SignupButton from "./signupButton";
import LogoutButton from "./logoutButton";
import turkeyChicken from "/assets/turkey-chicken-svgrepo-com.svg";

const Navbar = () => {
  const { isAuthenticated, user, error, isLoading } = useAuth0();

  console.log("Is Authenticated:", isAuthenticated);
  console.log("User Info:", user);
  console.log("Error:", error);
  console.log("Loading State:", isLoading);

  return (
    <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <text
            className="just-another-hand-regular"
            style={{ fontSize: "2rem" }}
          >
            {" "}
            Potluck Planner{" "}
          </text>
          <img
            src={turkeyChicken}
            width="24px"
            height="24px"
            className="d-inline-block align-text-top"
            style={{ marginLeft: "10px" }}
          ></img>
        </a>
        <nav className="nav navbar bg-body-tertiary">
          <form
            className="container-fluid justify-content-start"
            style={{ gap: "15px" }}
          >
            <div
              className="flex flex-row just-another-hand-regular"
              style={{ gap: "1rem", fontSize: "1.5rem" }}
            >
              <div>Home</div>
              <div>How it Works</div>
              <div>Contact</div>
            </div>
            {!isAuthenticated && (
              <LoginButton style={{ backgroundColor: "rgb(87,110,130)" }}>
                {" "}
                <div
                  className="just-another-hand-regular"
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    padding: "0 .5rem 0 .5rem",
                  }}
                >
                  Log In
                </div>{" "}
              </LoginButton>
            )}
            {!isAuthenticated && (
              <SignupButton
                style={{
                  backgroundColor: "#DF8955",
                  border: "none",
                }}
              >
                <div
                  className="just-another-hand-regular"
                  style={{ fontSize: "1.25rem", padding: "0 .5rem 0 .5rem" }}
                >
                  {" "}
                  Sign Up
                </div>
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
