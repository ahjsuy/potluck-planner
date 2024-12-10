import express from "express";

var itemsRouter = express();

itemsRouter.get("/", function (req, res) {
  res.send(JSON.stringify("GET route"));
});

export default itemsRouter;
