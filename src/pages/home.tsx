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
      <div className="info">
        <div>HERE IS INFO 1</div>
        <div>HERE IS INFO 2</div>
        <div>HERE IS INFO 3</div>
      </div>
      <div>
        <button onClick={getReq}>API REQUEST</button>
      </div>
    </div>
  );
};

export default Home;
