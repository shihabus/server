const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/health", (req, res) => {
  res.status(200);
  res.send("Wakkanda forever");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
