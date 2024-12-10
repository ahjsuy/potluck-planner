import "dotenv/config";
import express from "express";
import cors from "cors";
import pkg from "express-openid-connect";
import usersRouter from "../routes/users.js";
import eventsRouter from "../routes/events.js";
import dishesRouter from "../routes/dishes.js";

const { auth, requiresAuth } = pkg;
var app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:4040",
  clientID: "RRRJ8PMwKWKnRmLmhMKzo6Y0VDUU5lzZ",
  issuerBaseURL: "https://dev-renjsh7vxzbk0u0q.us.auth0.com",
};

app.use(cors());
app.use(auth(config));
app.use(express.json());
// app.use("/items", items);
app.use("/users", usersRouter);
app.use("/create", eventsRouter);
app.use("/createDish", dishesRouter);

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

console.log("STARTED SERVER");
console.log(process.env.DB_USER);
app.listen(4000);
