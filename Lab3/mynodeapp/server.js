const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my custom Node.js Docker image!");
});
app.get("/about", (req, res) => {
  res.send("This is a simple Express app running in Docker");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});