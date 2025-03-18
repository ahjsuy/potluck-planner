import InfoCard from "../components/infoCard";
import Navbar from "../components/navbar";
import TitleCard from "../components/TitleCard";

const getReq = async () => {
  try {
    const response = await fetch("http://localhost:3000/items");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="feast-bg">
        <TitleCard />
      </div>
      <div className="info flex-row">
        <div className="small">
          <InfoCard text="Send out automatic email reminders to invitees!" />
        </div>
        <div className="small">
          <InfoCard text="Schedule with your friends" />
        </div>
        <div className="small">
          <InfoCard text="Edit the meal planner until the deadline" />
        </div>
      </div>
    </div>
  );
};

export default Home;
