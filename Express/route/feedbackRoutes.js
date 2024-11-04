const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback'); // Correct path to Feedback model

// POST route for adding feedback
router.post('/', async (req, res) => {
  const { reviewTitle, ename, dueDate, status } = req.body;

  if (!reviewTitle || !ename || !dueDate) {
    return res.status(400).json({ error: 'Name, review title, and due date are required.' });
  }

  try {
    const newFeedback = new Feedback({
      ename,
      reviewTitle,
      dueDate,
      status
    });

    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route for fetching feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
