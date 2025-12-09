const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Dummy user data (for demo purposes)
const users = [
  { id: 1, username: 'student', password: bcrypt.hashSync('password', 8) }
];

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Invalid username or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid username or password' });
    res.json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
});



module.exports = router;