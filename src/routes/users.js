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

usersRouter.post("/create", async function (req, res) {
  try {
    const { email, name } = req.body;
    const newUser = await User.create({ email, name });
    res.status(201).json({ message: "User created", user: newUser });
    console.log("Created new user: ", email, " ", name);
  } catch (error) {
    console.error("Error creating user ", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

export default usersRouter;
