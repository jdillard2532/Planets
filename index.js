const express = require("express");
const data = require("./data.json");
const PORT = process.env.Port || 3000;
const app = express();

app.use(express.static("assets"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { data: data[0] });
});
app.get("/mercury", (req, res) => {
  res.render("index.ejs", { data: data[0] });
});

app.get("/venus", (req, res) => {
  res.render("index.ejs", { data: data[1] });
});
app.get("/earth", (req, res) => {
  res.render("index.ejs", { data: data[2] });
});
app.get("/mars", (req, res) => {
  res.render("index.ejs", { data: data[3] });
});
app.get("/jupiter", (req, res) => {
  res.render("index.ejs", { data: data[4] });
});
app.get("/saturn", (req, res) => {
  res.render("index.ejs", { data: data[5] });
});
app.get("/uranus", (req, res) => {
  res.render("index.ejs", { data: data[6] });
});
app.get("/neptune", (req, res) => {
  res.render("index.ejs", { data: data[7] });
});

app.listen(PORT, () => {
  console.log("Listen on port 3000");
});
