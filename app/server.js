const express = require("express");
const app = express();

app.get("/whoami", (req, res) => {
  res.json({ message: "ECS Check" });
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Server running");
})




