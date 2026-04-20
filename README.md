# 🧩 MERN Stack User Management System

A professional Full-Stack (MERN) application developed for **Assignment 9**, demonstrating seamless integration between a React frontend and a MongoDB database via a Node/Express REST API.

---

## 🚀 Overview

This project is a complete **CRUD (Create, Read, Update, Delete)** application. It allows users to manage a digital directory with real-time updates and persistent storage. Built with a focus on clean architecture and custom UI/UX design.

### ✨ Key Features
* **➕ Create:** Add new users with name, email, and age validation.
* **📖 Read:** Fetch and display all users from MongoDB in a dynamic table.
* **✏️ Update:** Inline editing of user information without page reloads.
* **🗑️ Delete:** Remove records permanently with a single click.
* **🛡️ Validation:** Mongoose schemas ensure data integrity and unique email constraints.
* **🎨 Custom UI:** A sleek, modern, and responsive interface built with custom CSS.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **MongoDB** 🍃 | NoSQL Database for persistent storage |
| **Express.js** 🚂 | Minimalist web framework for Node.js |
| **React.js** ⚛️ | Frontend library for building interactive UIs |
| **Node.js** 🟢 | JavaScript runtime for backend logic |
| **Mongoose** 🧊 | Elegant MongoDB object modeling for Node.js |
| **Axios** 📡 | Promise-based HTTP client for API requests |

---

## 📁 Project Structure

```text
Assignment9_MERN/
├── backend/           # Node.js & Express API
│   ├── config/        # DB Connection setup
│   ├── controllers/   # Business logic & CRUD functions
│   ├── models/        # Mongoose User Schema
│   ├── routes/        # API Endpoints mapping
│   └── server.js      # Entry point
├── frontend/          # React.js Application
│   ├── src/
│   │   ├── App.js     # Main Logic & UI
│   │   └── App.css    # Custom Styling
└── README.md

---

## ⚙️ Local Setup Instructions

### 1. Prerequisites
* Install **[Node.js](https://nodejs.org/)** 🟢
* Install **[MongoDB Community Server](https://www.mongodb.com/try/download/community)** 🍃
* Install **[MongoDB Compass](https://www.mongodb.com/products/compass)** (GUI Tool) 🧭

### 2. Backend Setup
Navigate to the backend directory and initialize the server:
```bash
cd backend
npm install
# Note: Ensure your local MongoDB is running at mongodb://127.0.0.1:27017
node server.js

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and start the React app:

```bash
cd frontend
npm install
npm start

The application will be accessible at `http://localhost:3000`.

---

## 👤 Author

**Muhammad Ubaid Roman** 🎓

* **Education:** BS Computer Science Student | [cite_start]GCUF [cite: 1]
* **Role:** Certified Ethical Hacker | [cite_start]Tech Hustler [cite: 1]
* [cite_start]**Location:** Jhelum, Punjab, Pakistan [cite: 1]
* [cite_start]**LinkedIn:** [My LinkedIn Profile](https://www.linkedin.com/in/rajaubaid/) [cite: 1]
* [cite_start]**GitHub:** [@Rajaubaid786](https://github.com/Rajaubaid786) [cite: 1]

## 🌟 Support

If you found this project helpful or learned something new, please give it a **Star**! ⭐
