//Import required modules
const express = require("express");
const path = require("path");

//Set up Express object and path
const app = express();
const port = process.env.PORT || "8888";

// Routing to the views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

//Test message
app.get("/", (req, res) => {
  //   res.status(200).send("Test Page");
  res.render("index", { title: "Home" });
});

//Set up server listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("Hello World!!!");
  console.log("My name is Veerpal Kaur. And, I am making this app for fun.");
});
