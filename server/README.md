
# Backend - Lessons API Server

This Node.js and Express backend provides REST API endpoints for managing lessons stored in MongoDB. It supports fetching lessons, user registration, and login.

---

## Features

- **MongoDB Connection**: Connects to MongoDB Atlas or local MongoDB.
- **CRUD Operations**: Perform Create, Read, Update, Delete operations for lessons.
- **User Authentication**: User registration and login with password hashing.
- **Lesson Fetching**: Fetch lessons with optional filtering by search and tags.

---

## Requirements

- **Node.js** (v14+)
- **MongoDB** (local or Atlas)
- **npm**

---

## Setup

### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file or directly replace the connection string in `server.js`. Example of `.env`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```

### 3. Update `server.js`

Ensure that your `server.js` reads the environment variables properly:

```javascript
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const PORT = process.env.PORT || 5000;
```

---

## API Endpoints

### **GET /lessons**

- Fetch all lessons.
- Supports query parameters like `search` and `tags` for filtering.

### **POST /register**

- Register a new user with a username and password.

### **POST /login**

- Login a user with their credentials.

---

## Notes

- Ensure your MongoDB connection string is correctly configured.
- Seed your database with data for testing purposes.

---

This server is designed to be a fast and easy way to manage lessons and users. Enjoy building your application!
