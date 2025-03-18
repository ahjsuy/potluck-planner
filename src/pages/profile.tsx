import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import EmblaCarousel from "../components/carousel";
import { Event } from "../types";
import Calendar from "../components/calendar";

type Events = { Event: Event };

const Profile = () => {
  const [users, setUsers] = useState({});
  const [events, setEvents] = useState<Events[]>([]);

  const { user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    findEvents();
  }, []);

  const findEvents = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/createEventGuest?email=${user?.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch events");
      const events = await res.json();
      console.log(events);
      setEvents(events);
    } catch (error) {
      console.error("Error fetching events ", error);
    }
  };
  if (!user) {
    return null;
  }

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:4000/users"); // Adjust URL as needed
      const json = await response.json();
      setUsers(json); // Store fetched items in state
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleClick = () => {
    navigate("../create");
  };

  const handleTestClick = async () => {
    try {
      const res = await fetch("http://localhost:4000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "test@gmail.com", name: "testname" }),
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="page-bg">
      <Navbar />
      <div className="container" style={{ display: "flex", gap: "1em" }}>
        <div className="profile">
          <h1>Profile</h1>
          <img
            src={user.picture}
            alt="profile"
            style={{ borderRadius: "2em", margin: "0.5em" }}
          />
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h2>Number of events: {events.length}</h2>
          <div className="calendar">
            <Calendar events={events} />
          </div>
        </div>
        <div className="events">
          <h1>Upcoming Events</h1>
          <EmblaCarousel events={events} />
          <div>
            <button onClick={() => navigate("../create")}>
              Create a new event
            </button>
            <button onClick={() => navigate("../listEvents")}>
              See all events
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="page-bg">
    //   <h1>Profile Page</h1>
    //   <div>
    //     <img src={user.picture} alt="profile" />
    //   </div>
    //   <div>
    //     <h2>{user.name}</h2>
    //     <h2>{user.email}</h2>
    //   </div>
    //   <div>Decoded ID Token</div>
    //   <div>{JSON.stringify(user, null, 2)}</div>
    //   <div>
    //     <button onClick={handleClick}>Create event</button>
    //     <button onClick={() => navigate("../listEvents")}>
    //       See all events
    //     </button>
    //   </div>
    //   <div>
    //     <button onClick={fetchItems}>See all users</button>
    //     {JSON.stringify(users)}
    //   </div>
    //   <button onClick={handleTestClick}>TEST CREATE USER</button>
    // </div>
  );
};

export default Profile;
