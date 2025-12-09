const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

// Get all lessons with optional filters
router.get('/', async (req, res) => {
  const { tag, search } = req.query;
  let filter = {};

  if (tag) {
    filter.tags = tag;
  }

  if (search) {
    filter.title = { $regex: search, $options: 'i' };
  }

  const lessons = await Lesson.find(filter);
  res.json(lessons);
});

// (Optional) Create sample lessons - for initial data
router.post('/sample', async (req, res) => {
  const sampleLessons = [
    {
      title: "Intro to Algebra",
      description: "Basic algebra concepts.",
      duration: 30,
      videoUrl: "https://via.placeholder.com/640x360?text=Video+1",
      tags: ["Math", "Algebra"],
    },
    // Add more sample lessons here
  ];

  await Lesson.insertMany(sampleLessons);
  res.send('Sample lessons added');
});

module.exports = router;