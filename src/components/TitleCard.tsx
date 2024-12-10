import SignupButton from "./signupButton";

const TitleCard = () => {
  return (
    <div className="title-card">
      <div
        className="just-another-hand-regular"
        style={{ fontSize: "10vh", whiteSpace: "pre-wrap" }}
      >
        {/*
            prettier-ignore
        */}
        <p>
          PLAN  YOUR    <strong>PERFECT</strong>   <br />POTLUCK
        </p>
      </div>
      <div>
        <SignupButton
          style={{
            fontSize: "4vh",
            backgroundColor: "#DF8955",
            border: "none",
            paddingRight: "2vh",
            paddingLeft: "2vh",
          }}
        >
          Get Started
        </SignupButton>
      </div>
    </div>
  );
};

export default TitleCard;
