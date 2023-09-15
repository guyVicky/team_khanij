const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const session = require("express-session");
const {v4:uuidv4} = require("uuid")

const router = require('./router');

const port = process.env.port || 3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}));

app.use('/route', router);

app.get("/", (req, res) => {
  res.render("loginpage", {style: "static/style.css", title: "Login" });
});

app.get("/home", (req, res) => {
  res.render("home", {style: "static/home-style.css", title: "Coal Shipment"});
});

app.get("/home2", (req, res) => {
  res.render("home2");
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
