import Navbar from "../components/navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Event } from "../models/relationsModel";
import TextBubble from "../components/textBubble";
import TypeButton from "../components/typeButton";
import Category from "../components/category";
import { Dishes } from "../types";

interface EventType {
  eventid: string;
  eventname: string;
  address: string;
  date: string;
  Allergies: [
    {
      eventid: string;
      allergy: string;
    }
  ];
  Dishes: [Dishes];
  EventGuests: [
    {
      userid: string;
      eventid: string;
    }
  ];
}

const EditEvent = () => {
  const { user } = useAuth0();
  const { eventID } = useParams();
  const [event, setEvent] = useState<EventType | null>(null);
  const [allergies, setAllergies] = useState([""]);
  const [appetizers, setAppetizers] = useState<Dishes[]>([]);
  const [entrees, setEntrees] = useState<Dishes[]>([]);
  const [desserts, setDesserts] = useState<Dishes[]>([]);
  const [drinks, setDrinks] = useState<Dishes[]>([]);
  const [guests, setGuests] = useState<String[]>();
  const [eventIcon, setEventIcon] = useState(
    "/assets/pexels-picjumbo-com-55570-196648.jpg"
  );

  useEffect(() => {
    fetchEvent();
  }, [eventID]);

  useEffect(() => {
    if (!event) return;
    const dishes = event.Dishes || [];
    const newApps = dishes.filter((dish) => dish.category === "appetizers");
    const newEntrees = dishes.filter((dish) => dish.category === "entrees");
    const newDesserts = dishes.filter((dish) => dish.category === "desserts");
    const newDrinks = dishes.filter((dish) => dish.category === "drinks");
    const guests = event.EventGuests.map((guest) => guest.userid);
    const newAllergies = event.Allergies.map((allergy) => allergy.allergy);

    setAppetizers(newApps);
    setEntrees(newEntrees);
    setDesserts(newDesserts);
    setDrinks(newDrinks);

    setGuests(guests);
    setAllergies(newAllergies);
  }, [event]);

  const fetchEvent = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/create?eventid=${eventID}`
      );
      if (!res.ok) throw new Error("Failed to fetch events");
      const event = await res.json();
      console.log(event);
      setEvent(event[0]);
    } catch (error) {
      console.error("Error fetching events ", error);
    }
  };

  const handleUpload = () => {
    const input = document.querySelector(".file-uploader") as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (!file.type.includes("image")) {
        alert("only images are allowed");
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setEventIcon(fileReader.result as string);
      };
    } else {
      console.error("no files selected \n");
    }
  };

  return (
    <div
      className="page-bg"
      style={{ alignItems: "center", textAlign: "center" }}
    >
      <Navbar />

      <div className="note-card">
        <div className="flex-row" style={{ placeContent: "center" }}>
          <div
            className="upload-picture"
            key={eventIcon}
            style={{
              background: `url(${eventIcon})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              flexGrow: "1",
            }}
          >
            <h1
              className="add-icon material-symbols-outlined"
              style={{ fontSize: "100px", color: "#bbb" }}
            >
              add
            </h1>
            <input
              className="file-uploader"
              type="file"
              onChange={handleUpload}
              accept=".jpg, .png, .img"
            />
          </div>
          <div
            style={{
              flexGrow: "3",
              marginLeft: "45px",
              textAlign: "center",
              justifyContent: "center",
              top: "25%",
              fontSize: "40px",
            }}
          >
            <div className="flex-column" style={{ alignItems: "center" }}>
              <div>
                <h1 className="lisu-bosa-regular" style={{ fontSize: "55px" }}>
                  <strong>{event?.eventname ?? "Event Name"}</strong>
                </h1>
              </div>
              <div style={{ fontSize: "20px" }}>at</div>
              <div
                className="flex-row"
                style={{
                  fontSize: "25px",
                  textAlign: "center",
                  whiteSpace: "pre",
                  alignItems: "center",
                }}
              >
                {event?.address}
                <div
                  style={{
                    fontSize: "20px",
                    alignSelf: "center",
                    margin: "0 1em",
                  }}
                >
                  on
                </div>
                {event?.date}
              </div>
            </div>
          </div>
        </div>
        <hr className="half-hr"></hr>
        <div className="lisu-bosa-regular" style={{ placeContent: "center" }}>
          Please note the following allergies
          <div className="flex-row" style={{ placeContent: "center" }}>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                gap: "0.5em",
                margin: "0px",
                padding: "0px",
                minHeight: "100%",
              }}
            >
              {allergies
                .filter((item) => item)
                .map((item, index) => (
                  <TextBubble
                    text={item}
                    index={index}
                    setStateArray={setAllergies}
                  />
                ))}
            </ul>
            <div style={{ margin: "0 0.5em" }}>
              <TypeButton
                classNames="typeButton-allergies"
                setStateArray={setAllergies}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="note-card">
        <div>
          <Category
            header="Appetizers"
            dishes={appetizers}
            setDishes={setAppetizers}
          />
        </div>
      </div>
      <div className="note-card">
        <div>
          <Category header="Entrees" dishes={entrees} setDishes={setEntrees} />
        </div>
      </div>
      <div className="note-card">
        <div>
          <Category
            header="Desserts"
            dishes={desserts}
            setDishes={setDesserts}
          />
        </div>
      </div>
      <div className="note-card">
        <div>
          <Category header="Drinks" dishes={drinks} setDishes={setDrinks} />
        </div>
      </div>

      <div className="note-card">
        <h1 className="lisu-bosa-regular">
          <img className="vine" src="/assets/vine-left.svg"></img>
          Guest List
          <img
            className="vine flip-horizontally"
            src="/assets/vine-left.svg"
          ></img>
        </h1>
        <hr className="half-hr" />
        <div>
          <ul style={{ listStyleType: "none" }}>
            {guests?.map((guest) => (
              <li>{guest}</li>
            ))}
          </ul>
        </div>
        <button className="orange-button"> Invite More?</button>
      </div>
    </div>
  );
};

export default EditEvent;
