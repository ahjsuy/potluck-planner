import express from "express";
import Event from "../models/eventsModel.js";

const eventsRouter = express();

eventsRouter.post("/", async function (req, res) {
  try {
    const { id, owner, attendees, date, place, notes } = req.body;
    const newEvent = await Event.create({
      id,
      owner,
      attendees,
      date,
      place,
      notes,
    });
    res.status(201).json({ message: "User created", user: newEvent });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

export default eventsRouter;
