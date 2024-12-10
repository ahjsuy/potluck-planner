import express from "express";

const dishesRouter = express();

dishesRouter.post("/", async function (req, res) {
  try {
    console.log(req.body);
    res.status(201).json({ message: "User created", user: newEvent });
  } catch (error) {
    console.log(req.body);
    console.error("Error creating dish:", error);
    res.status(500).json({ error: "Failed to create dish" });
  }
});

export default dishesRouter;
