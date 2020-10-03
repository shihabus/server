const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Work in progress! Hola from VS");
});

app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life");
  res.status(418);
  res.send("Wakkanda forever");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
