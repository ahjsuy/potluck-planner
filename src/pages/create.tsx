import { useState, FormEvent } from "react";
import Navbar from "../components/navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TypeButton from "../components/typeButton";
import TextBubble from "../components/textBubble";
import Category from "../components/category";
import { AddressAutofill } from "@mapbox/search-js-react";

interface Dishes {
  id: string;
  dishName: string;
  personAssigned: string;
  portions: string;
}

const Create = () => {
  const [eventDate, setEventDate] = useState(new Date());
  const [allergies, setAllergies] = useState([""]);
  const [appetizers, setAppetizers] = useState<Dishes[]>([]);
  const [entrees, setEntrees] = useState<Dishes[]>([]);
  const [desserts, setDesserts] = useState<Dishes[]>([]);
  const [drinks, setDrinks] = useState<Dishes[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = document.getElementById("eventForm") as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      // create the event
      const response = await fetch("http://localhost:4000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("This is the request: ", JSON.stringify(data));
      const result = await response.json();
      console.log(result);

      // create the dishes
      const allDishes = [...appetizers, ...entrees, ...desserts, ...drinks];
      for (let i = 0; i < allDishes.length; i++) {
        const dishResponse = await fetch("http://localhost:4000/createDish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allDishes[i]),
        });
        console.log("This is the request: ", JSON.stringify(data));
        const result = await response.json();
        console.log(result);
      }

      alert(result.message || "User created sucessfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="page-bg">
      <Navbar />
      <div style={{ alignItems: "center", textAlign: "center" }}>
        <div className="note-card">
          <div>
            <h1>Important Information</h1>
          </div>
          <div
            className="flex-row"
            style={{ gap: "2em", alignItems: "center" }}
          >
            <div className="small">
              <h2>Where</h2>
              <form>
                {/* <AddressAutofill accessToken="pk.eyJ1IjoiYWhqc3V5IiwiYSI6ImNtNGd2NnF6cTAwZnEycW9tcHV1bW9mMjYifQ.jIBTjnfN6qxU0KMiIORE-A">
                  <input
                    className="address"
                    placeholder="Address"
                    type="text"
                    autoComplete="address-line1"
                  />
                </AddressAutofill> */}
              </form>
            </div>
            <div className="flex-row small">
              <h2>When</h2>
              <DatePicker
                selected={eventDate}
                onChange={(date) => {
                  if (date) {
                    setEventDate(date);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <h2>Allergies</h2>
          </div>
          <div
            className="flex-row"
            style={{ gap: ".25em", alignItems: "stretch", display: "flex" }}
          >
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                gap: "0.25em",
              }}
            >
              {allergies.map((item, index) => (
                <TextBubble
                  text={item}
                  index={index}
                  setStateArray={setAllergies}
                />
              ))}
            </ul>

            <TypeButton
              classNames="typeButton-allergies"
              setStateArray={setAllergies}
            />
          </div>
        </div>
        <div>
          <div className="note-card">
            <h1>Dishes</h1>
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
              <Category header="Drinks" dishes={drinks} setDishes={setDrinks} />
              <Category
                header="Desserts"
                dishes={desserts}
                setDishes={setDesserts}
              />
            </div>
          </div>
        </div>
        <div className="note-card">
          <form id="eventForm" onSubmit={handleSubmit}>
            <input id="id" name="id" />
            <input id="owner" name="owner" />
            <input id="attendees" name="attendees" />
            <input id="date" name="date" />
            <input id="place" name="place" />
            <input id="notes" name="notes" />
            <button>Create Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
