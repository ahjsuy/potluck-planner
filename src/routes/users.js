import express from "express";
import User from "../models/usersModel.js";

const usersRouter = express();

usersRouter.get("/", async function (req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

export default usersRouter;
