const express = require("express");
// const data = require("../data");
const learnerRoute = express.Router();

const dada = require("../data/learnerData");

learnerRoute.get("/", (req, res) => {
  res.status(200).json({ learners: data });
});

// Url Bar is a param
learnerRoute.get("/:idx", (req, res) => {
  let idx = Number(require.params.idx);

  if (idx > data.length || idx == 0) {
    res.status(404).json({ message: "Learner Not Found" });
  }
  res.status(200).json({ Learner: data[idx] });
});

learnerRoute.post("/", (req, res) => {});

learnerRoute.put("/:id", (req, res) => {});

learnerRoute.delete("/:id", (req, res) => {});

module.exports = learnerRoute;
