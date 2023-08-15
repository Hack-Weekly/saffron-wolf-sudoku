const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.sendFile();
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
