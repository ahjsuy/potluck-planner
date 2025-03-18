import express from "express";
import Dish from "../models/dishesModel.js";

const dishesRouter = express();

dishesRouter.post("/", async function (req, res) {
  try {
    let { dishid, eventid, dishname, dishportion, dishguest, category } =
      req.body;
    const newDish = await Dish.create({
      dishid,
      eventid,
      dishname,
      dishportion,
      dishguest,
      category,
    });
    console.log(req.body);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating dish:", error);
    res.status(500).json({ error: "Failed to create dish" });
  }
});

export default dishesRouter;
