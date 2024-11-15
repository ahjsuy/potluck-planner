const TitleCard = () => {
  return (
    <div className="title-card">
      <div
        className="just-another-hand-regular"
        style={{ fontSize: "86px", whiteSpace: "pre-wrap" }}
      >
        {/*
            prettier-ignore
        */}
        <p>
          PLAN  YOUR    <strong>PERFECT</strong>   <br />POTLUCK
        </p>
      </div>
      <button
        className="btn btn-sm btn-primary me-2 lisu-bosa-regular"
        type="button"
        style={{
          backgroundColor: "#DF8955",
          border: "none",
          fontSize: "32px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default TitleCard;
