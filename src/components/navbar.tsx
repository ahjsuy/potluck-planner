const Navbar = () => {
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
            <button
              className="btn btn-sm btn-outline-secondary lisu-bosa-regular"
              type="button"
            >
              Log In
            </button>
            <button
              className="btn btn-sm btn-primary me-2 lisu-bosa-regular"
              type="button"
              style={{
                backgroundColor: "#DF8955",
                border: "none",
                padding: "5px",
                paddingRight: "8px",
                paddingLeft: "8px",
              }}
            >
              Sign Up
            </button>
          </form>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
