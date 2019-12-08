const express = require("express");
const Answers = require("../models/answers");

const router = new express.Router();

router.post("/answers", async (req, res) => {
  const answers = new answers(req.body);

  try {
    await answers.save();
    res.status(201).send(answers);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/answers", async (req, res) => {
  try {
    const tasks = await Answers.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/answers/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const tasks = await Answers.findById(_id);

    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const tasks = await Answers.findByIdAndDelete(req.params.id);

    if (!tasks) {
      return res.status(404).send();
    }

    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
