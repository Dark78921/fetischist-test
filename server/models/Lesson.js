const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number, // in minutes
  videoUrl: String,
  tags: [String],
});

module.exports = mongoose.model('Lesson', LessonSchema);