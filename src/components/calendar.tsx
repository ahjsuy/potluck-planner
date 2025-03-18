import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Event } from "../types";

type Events = { Event: Event };

interface Props {
  events: Events[];
}

export default function Calendar({ events }: Props) {
  return (
    <FullCalendar
      plugins={[listPlugin]}
      initialView="listMonth"
      events={events.map((items, index) => ({
        title: items.Event.eventname,
        start: items.Event.date,
      }))}
      eventTextColor="black"
      height="auto"
    />
  );
}
