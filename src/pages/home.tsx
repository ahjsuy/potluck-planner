import Navbar from "../components/navbar";
import TitleCard from "../components/TitleCard";

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
    </div>
  );
};

export default Home;
