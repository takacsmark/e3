const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express responding to your request built automatically on Docker Hub and Travis, Sir.");
});

app.listen(80, () => {
  console.log("Express server listening on port 80.");
});
