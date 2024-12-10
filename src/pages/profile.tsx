import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState({});

  const { user } = useAuth0();
  const navigate = useNavigate();

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

  return (
    <div className="page-bg">
      <h1>Profile Page</h1>
      <div>
        <img src={user.picture} alt="profile" />
      </div>
      <div>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
      </div>
      <div>Decoded ID Token</div>
      <div>{JSON.stringify(user, null, 2)}</div>
      <div>
        <button onClick={handleClick}>Create event</button>
      </div>
      <div>
        <button onClick={fetchItems}>See all users</button>
        {JSON.stringify(users)}
      </div>
    </div>
  );
};

export default Profile;
