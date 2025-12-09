const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const User = require('./models/User');
const Lesson = require('./models/Lesson');

const app = express();
app.use(express.json());
app.use(cors());

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Invalid username or password' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid username or password' });
    // You can generate a JWT token here if needed
    res.json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ error: 'Login error', details: err.message });
  }
});

//Lesson route
app.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.json(lessons);
  } catch (err) {
    console.error('Error fetching lessons:', err);
    res.status(500).json({ error: 'Failed to fetch lessons' });
  }
});

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/coursebuilder', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('MongoDB connection error:', err));