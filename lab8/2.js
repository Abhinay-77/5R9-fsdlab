const express = require("express");
const axios = require("axios");
const app = express();
const users = require("./users.json");

app.set("view engine", "ejs");

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;

    res.render("2", { users });
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).send("Error fetching data from API");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});