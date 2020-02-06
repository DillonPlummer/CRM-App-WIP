const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

const users = require("./routes/inventory");

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose
  .connect("mongodb://localhost/clientManagementDev", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// LOAD CABINET MODEL //
require("./models/Cabinet");
const Cabinet = mongoose.model("cabinet"); // caps? plural?

// MIDDLEWARE INIT //

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Make 'public' directory static (accessible)
app.use(express.static(path.join(__dirname, "public")));

// INDEX ROUTE //
app.get("/", (req, res) => {
  res.render("index");
});

// ************ INVENTORY ROUTES ************ //
// INVENTORY INDEX ROUTE //
app.get("/inventory", (req, res) => {
  res.render("inventory/index");
});

// INVENTORY ADD MENU ROUTE //
app.get("/inventory/add", (req, res) => {
  res.render("inventory/add");
});

// INVENTORY - ADD CAB ROUTE //
app.get("/inventory/add/cabinet", (req, res) => {
  res.render("inventory/add/cabinet");
});

// INVENTORY - ADD FIXTURE ROUTE //
app.get("/inventory/add/fixture", (req, res) => {
  res.render("inventory/add/fixture");
});

// INVENTORY - ADD TILE ROUTE //
app.get("/inventory/add/tile", (req, res) => {
  res.render("inventory/add/tile");
});

// INVENTORY - ADD HARDWARE ROUTE //
app.get("/inventory/add/hardware", (req, res) => {
  res.render("inventory/add/hardware");
});

// INVENTORY - ADD COUNTERTOP ROUTE //
app.get("/inventory/add/countertop", (req, res) => {
  res.render("inventory/add/countertop");
});

// INVENTORY - ADD PAINT ROUTE //
app.get("/inventory/add/paint", (req, res) => {
  res.render("inventory/add/paint");
});

// ************ CLIENT ROUTES ************ //
// CLIENT INDEX ROUTE //
app.get("/clients", (req, res) => {
  res.render("clients/index");
});

// CLIENT ADD MENU ROUTE //
app.get("/clients/add", (req, res) => {
  res.render("clients/add");
});

// PROCESS FORM
app.post("/inventory", (req, res) => {
  res.send("test successful!");
});

// LISTENING //
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
