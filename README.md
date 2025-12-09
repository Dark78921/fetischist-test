
# Full Project - Lessons Catalog App

This project consists of a **React-based frontend** and a **Node.js/Express backend** that work together to provide a fully functional Lessons Catalog. The frontend allows users to search, filter, and manage lessons, while the backend handles data fetching and user authentication.

---

## Features

- **Frontend**: 
  - Search lessons by title
  - Filter lessons by tags (e.g., Math)
  - Display lessons with images, descriptions, and duration
  - Select and deselect lessons
  - Fully responsive design

- **Backend**:
  - CRUD operations for lessons
  - User registration and login
  - Fetch lessons with optional filtering by search and tags

---

## Requirements

- **Frontend**: 
  - **Node.js** (v14+)
  - **npm** (v6+)
  - **Tailwind CSS** for styling

- **Backend**:
  - **Node.js** (v14+)
  - **MongoDB** (local or Atlas)
  - **npm** (v6+)

---

## Setup

### 1. Install Dependencies

#### **Frontend**

Navigate to the frontend directory and run the following command:

```bash
npm install
```

#### **Backend**

Navigate to the backend directory and run the following command:

```bash
npm install
```

### 2. Configure Environment Variables

For the **Backend**:
- Create a `.env` file in the backend directory or update the connection string directly in `server.js`. Example `.env`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```

For the **Frontend**:
- Ensure your backend server is running at `http://localhost:5000`, or update the API URL in your frontend code accordingly.

---

## Run the Project

### 1. Run the Backend

In the backend directory, run:

```bash
npm start
```

This will start the backend server on `http://localhost:5000`.

### 2. Run the Frontend

In the frontend directory, run:

```bash
npm start
```

This will start the frontend React app, typically accessible at `http://localhost:3000`.

---

## Notes

- The **Frontend** uses **Tailwind CSS** for styling, and you can customize styles and components as needed.
- The **Backend** uses **MongoDB** for storing lessons and user data.
- Ensure both frontend and backend servers are running simultaneously for proper functionality.

---

Enjoy building and exploring the full Lessons Catalog App!
