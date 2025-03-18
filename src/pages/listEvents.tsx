import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Event from "./../models/eventsModel";
import EventGuest from "../models/eventGuestsModel";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/eventCard";
import { Event } from "../types";

type Events = { Event: Event };

const ListEvents = () => {
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

  return (
    <div className="page-bg">
      <Navbar />
      {events && (
        <div className="container">
          <div style={{ textAlign: "center" }}>
            {/* {JSON.stringify(events[0].Event, null, "\n")} */}
          </div>
          <table className="table">
            <tbody>
              {events
                .reduce((prev, curr, index) => {
                  if (index % 3 == 0) prev.push([]);
                  prev[prev.length - 1].push(curr);
                  return prev;
                }, [] as Events[][])
                .map((item, index) => (
                  <tr>
                    {item.map((o, i) => (
                      <td>
                        <a
                          className="invisible-link"
                          href=""
                          onClick={() =>
                            navigate(`/editEvent/${o.Event.eventid}`)
                          }
                        ></a>
                        {
                          <EventCard
                            eventName={o.Event.eventname}
                            date={o.Event.date}
                            address={o.Event.address}
                          />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {/*
      <ul>
        {events.map((item) => (
          <li>
            <EventCard
              eventName={JSON.stringify(
                Object.fromEntries(Object.entries(item)).Event.eventname
              )}
            />
            {/* <a
              href=""
              onClick={() =>
                navigate(
                  `/editEvent/${
                    Object.fromEntries(Object.entries(item)).Event.eventid
                  }`
                )
              }
            >
              {JSON.stringify(
                Object.fromEntries(Object.entries(item)).Event.eventname
              )}
            </a> }
          </li>
        ))}
      </ul>*/}
    </div>
  );
};

export default ListEvents;
