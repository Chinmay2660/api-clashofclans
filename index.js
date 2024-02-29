const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const scoresRouter = require("./api/routes/scoreRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://scmuser:ScmUs3r!!d3vT34m@10.144.96.134:27017/scm_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.use("/", scoresRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
