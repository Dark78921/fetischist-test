const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const lessonsRoutes = require('./routes/lessons');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use('/auth', authRoutes);
app.use('/lessons', lessonsRoutes);

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/coursebuilder';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');

        // Optional: Seed sample lessons if collection is empty
        const Lesson = require('./models/Lesson');

        // Make sure this code is inside an async function or use an IIFE
        (async () => {
            try {
                const count = await Lesson.countDocuments({});
            } catch (err) {
                console.error('Error counting or seeding lessons:', err);
            }
        })();

    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});