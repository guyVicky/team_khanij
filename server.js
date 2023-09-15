const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const session = require("express-session");

const router = require('./router');

const port = process.env.port || 3000;

const creds = {
  user: "system",
  pass: "123"
}

// app.use(bodyparser.json);
// app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true
// }));

app.use('/route', router);

app.get("/", (req, res) => {
  res.render("loginpage", { title: "Login" });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
