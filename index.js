const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Review are open to read. Read the Review then play some games.");
});

app.listen(port, () => {
  console.log(`Games review are ready to bake and publish :/ at port ${port}`);
});
