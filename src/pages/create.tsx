import { useState, useEffect, FormEvent } from "react";
import Navbar from "../components/navbar";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TypeButton from "../components/typeButton";
import TextBubble from "../components/textBubble";
import Category from "../components/category";
import { AddressAutofill } from "@mapbox/search-js-react";
import TutorialCard from "../components/tutorialCard";
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid";
import { Dishes } from "../types";
import DateTimePicker from "react-datetime-picker";

const Create = () => {
  const [finishedTutorial, setFinishedTutorial] = useState(false);
  const [eventDate, setEventDate] = useState(new Date(2017, 0, 1, 22, 15));
  const [allergies, setAllergies] = useState([""]);
  const [appetizers, setAppetizers] = useState<Dishes[]>([]);
  const [entrees, setEntrees] = useState<Dishes[]>([]);
  const [desserts, setDesserts] = useState<Dishes[]>([]);
  const [drinks, setDrinks] = useState<Dishes[]>([]);
  const [guests, setGuests] = useState([""]);
  const [eventName, setEventName] = useState("potluck");

  const { user } = useAuth0();
  const eventID = uuidv4();

  useEffect(() => {
    if (user?.name) {
      setGuests([user.email ?? ""]);
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEvent = {
      eventid: eventID,
      date: eventDate,
      eventname: eventName,
      address: "placeholder",
    };

    // const form = document.getElementById("eventForm") as HTMLFormElement;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    try {
      // create the event
      const response = await fetch("http://localhost:4000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      console.log("This is the request: ", JSON.stringify(newEvent));
      const result = await response.json();
      console.log(result);

      // create users

      for (let guest of guests) {
        const newGuest = {
          userid: guest,
          eventid: eventID,
        };
        const userResponse = await fetch(
          "http://localhost:4000/createEventGuest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newGuest),
          }
        );
        console.log("This is the request: ", JSON.stringify(newGuest));
        const result = await userResponse.json();
        console.log(result);
      }

      // create important info

      // create the dishes
      const allDishes = [...appetizers, ...entrees, ...desserts, ...drinks];
      for (let i = 0; i < allDishes.length; i++) {
        let { id, dishname, dishguest, dishportion } = allDishes[i];
        if (!dishname) {
          continue;
        }
        let cat = "";

        if (i < appetizers.length) {
          cat = "appetizers";
        } else if (i < entrees.length + appetizers.length) {
          cat = "entrees";
        } else if (i < desserts.length + entrees.length + appetizers.length) {
          cat = "desserts";
        } else {
          cat = "drinks";
        }

        const newDish = {
          dishid: id,
          eventid: eventID,
          dishname: dishname,
          dishportion: dishportion,
          dishguest: dishguest,
          category: cat,
        };

        const dishResponse = await fetch("http://localhost:4000/createDish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDish),
        });
        console.log("This is the request: ", JSON.stringify(newDish));
        const result = await dishResponse.json();
        console.log(result);
      }

      alert(result.message || "User created sucessfully!");

      // create allergies

      for (let allergy of allergies) {
        const newAllergy = {
          eventid: eventID,
          allergy: allergy,
        };
        const ares = await fetch("http://localhost:4000/createAllergy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAllergy),
        });
        console.log("Allergies sent");
        const allresponse = await ares.json();
        console.log(allresponse);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const testJSON = () => async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = document.getElementById("eventForm") as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
    } catch (error) {}
  };

  return (
    <div>
      <div className={"" + (finishedTutorial ? " " : "tutorial-open")}></div>
      <div className={"page-bg lisu-bosa-regular"}>
        {" "}
        <Navbar />
        {!finishedTutorial && (
          <TutorialCard setFinishedTutorial={setFinishedTutorial} />
        )}
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <div
            className="note-card"
            style={{ zIndex: "900", padding: "3em 5em" }}
          >
            <div>
              <h1>
                <input
                  className="line-input"
                  id="eventName"
                  placeholder={user?.nickname + "'s Potluck"}
                  onChange={(e) => setEventName(e.target.value)}
                  style={{
                    textAlign: "center",
                    marginBottom: "0.25em",
                  }}
                ></input>
              </h1>
            </div>
            <div
              className="flex-row"
              style={{
                gap: "2em",
                alignItems: "center",
              }}
            >
              <div
                className="small flex-row"
                style={{ gap: "1em", alignItems: "center" }}
              >
                <h2 style={{ margin: 0 }}>Where:</h2>
                <form>
                  <AddressAutofill accessToken="pk.eyJ1IjoiYWhqc3V5IiwiYSI6ImNtNGd2NnF6cTAwZnEycW9tcHV1bW9mMjYifQ.jIBTjnfN6qxU0KMiIORE-A">
                    <input
                      className="address-autofill"
                      placeholder="Address"
                      type="text"
                      autoComplete="address-line1"
                    />
                  </AddressAutofill>
                </form>
              </div>
              <div
                className="flex-row small"
                style={{ gap: "1em", alignItems: "center" }}
              >
                <h2 style={{ margin: 0 }}>When: </h2>
                {/* <DateTimePicker
                  onChange={(date) => {
                    if (date) {
                      setEventDate(date);
                    }
                  }}
                  value={eventDate}
                  dayAriaLabel={"day"}
                  dayPlaceholder={"dd"}
                /> */}
                <input
                  aria-label="Date and time"
                  type="datetime-local"
                  value={new Date(
                    eventDate.getTime() - eventDate.getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .slice(0, 16)}
                  onChange={(e) => {
                    if (e) {
                      setEventDate(new Date(e.target.value));
                      console.log(eventDate.toISOString());
                    }
                  }}
                />
                {/* <DatePicker
                  selected={eventDate}
                  onChange={(date) => {
                    if (date) {
                      setEventDate(date);
                    }
                  }}
                /> */}
              </div>
            </div>
            <div className="flex-row" style={{ marginTop: "1em" }}>
              <div>
                <h2>Allergies:</h2>
              </div>
              <div
                className="flex-row"
                style={{
                  gap: ".25em",
                  alignItems: "stretch",
                  display: "flex",
                  margin: "0 0 0 0.5em",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    gap: "0.25em",
                    margin: "auto",
                    padding: "0",
                    display: "flex",
                  }}
                >
                  {allergies.map(
                    (item, index) =>
                      item && (
                        <TextBubble
                          text={item}
                          index={index}
                          setStateArray={setAllergies}
                        />
                      )
                  )}
                </ul>

                <TypeButton
                  classNames="typeButton-allergies"
                  setStateArray={setAllergies}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="note-card">
              <h1>Meal Planner</h1>
              <div className="flex-column">
                <Category
                  header="Appetizers"
                  dishes={appetizers}
                  setDishes={setAppetizers}
                />
                <Category
                  header="Entrees"
                  dishes={entrees}
                  setDishes={setEntrees}
                />
                <Category
                  header="Drinks"
                  dishes={drinks}
                  setDishes={setDrinks}
                />
                <Category
                  header="Desserts"
                  dishes={desserts}
                  setDishes={setDesserts}
                />
              </div>
            </div>
          </div>
          <div className="note-card">
            <h1>Guest List</h1>
            <div className="flex-row">
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  gap: "0.25em",
                }}
              >
                {guests.map((item, index) => (
                  <TextBubble
                    text={item}
                    index={index}
                    setStateArray={setGuests}
                  />
                ))}
              </ul>
              <TypeButton
                classNames="typeButton-allergies"
                setStateArray={setGuests}
                placeholderText="JohnSmith@gmail.com"
              />
            </div>
          </div>
          {/* <div className="note-card">
            <form id="eventForm" onSubmit={handleSubmit}>
              <input id="event_id" name="event_id" />
              <input id="event_name" name="event_name" />
              <input id="event_date" name="event_date" />
              <input id="event_location" name="event_location" />
              <input id="event_allergies" name="event_allergies" />
              <button>Create Event</button>
            </form>
            <form></form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Create;
