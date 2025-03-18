import express from "express";
// import Event from "../models/eventsModel.js";

import {
  Event,
  Allergies,
  Dish,
  EventGuest,
} from "../models/relationsModel.js";

const eventsRouter = express();

eventsRouter.post("/", async function (req, res) {
  try {
    let { eventid, eventname, date, address } = req.body;
    const newEvent = await Event.create({
      eventid,
      eventname,
      date,
      address,
    });
    res.status(201).json({ message: "User created", user: newEvent });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

eventsRouter.get("/", async function (req, res) {
  try {
    let { eventid } = req.query;
    const event = await Event.findAll({
      where: {
        eventid: eventid,
      },
      include: [{ model: Allergies }, { model: Dish }, { model: EventGuest }],
    });
    res.json(event);
  } catch (error) {
    console.log(req.body);
    console.error("Error fetching event: ", error);
    res.status(500).json({ error: "Failed to fetch event" });
  }
});

export default eventsRouter;
