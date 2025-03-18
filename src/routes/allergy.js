import express from "express";
import Allergies from "../models/allergiesModel.js";

const allergyRouter = express();

allergyRouter.post("/", async function (req, res) {
  try {
    let { eventid, allergy } = req.body;
    const newDish = await Allergies.create({
      eventid,
      allergy,
    });
    console.log(req.body);
    res.status(201).json({ message: "allergy created" });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating allergy:", error);
    res.status(500).json({ error: "Failed to create allergy" });
  }
});

export default allergyRouter;
