import express from "express";
// import EventGuest from "../models/eventGuestsModel.js";
// import Event from "../models/eventsModel.js";
import { Event, EventGuest } from "../models/relationsModel.js";

const eventGuestsRouter = express();

eventGuestsRouter.post("/", async function (req, res) {
  try {
    let { userid, eventid } = req.body;
    const newDish = await EventGuest.create({
      userid,
      eventid,
    });
    console.log(req.body);
    res.status(201).json({ message: "eventGuest created" });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating eventGuest:", error);
    res.status(500).json({ error: "Failed to create eventGuest" });
  }
});

eventGuestsRouter.get("/", async function (req, res) {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: "User email req" });
    }
    const eventGuest = await EventGuest.findAll({
      where: {
        userid: email,
      },
      include: [{ model: Event }],
      attributes: { exclude: ["userid", "eventid"] },
    });
    res.json(eventGuest);
    console.log("TRYTEST");
  } catch (error) {
    console.log("Error fetching events, ", error);
    console.log("TEST");
    res.status(500).json({ error: "Failed to fetch eventGuest" });
  }
});

export default eventGuestsRouter;
