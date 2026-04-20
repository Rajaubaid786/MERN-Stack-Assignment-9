🧩 MERN Stack User Management SystemA professional Full-Stack (MERN) application developed for Assignment 9, demonstrating seamless integration between a React frontend and a MongoDB database via a Node/Express REST API.🚀 OverviewThis project is a complete CRUD (Create, Read, Update, Delete) application. It allows users to manage a digital directory with real-time updates and persistent storage. Built with a focus on clean architecture and custom UI/UX design.✨ Key Features➕ Create: Add new users with name, email, and age validation.📖 Read: Fetch and display all users from MongoDB in a dynamic table.✏️ Update: Inline editing of user information without page reloads.🗑️ Delete: Remove records permanently with a single click.🛡️ Validation: Mongoose schemas ensure data integrity and unique email constraints.🎨 Custom UI: A sleek, modern, and responsive interface built with custom CSS (No bulky frameworks).🛠️ Tech StackTechnologyPurposeMongoDB 🍃NoSQL Database for persistent storageExpress.js 🚂Minimalist web framework for Node.jsReact.js ⚛️Frontend library for building interactive UIsNode.js 🟢JavaScript runtime for backend logicMongoose 🧊Elegant MongoDB object modeling for Node.jsAxios 📡Promise-based HTTP client for API requests📁 Project StructurePlaintextAssignment9_MERN/
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
│   └── package.json
└── README.md
⚙️ Local Setup InstructionsTo run this project locally, follow these steps:1. PrerequisitesInstall Node.jsInstall MongoDB2. Backend SetupBashcd backend
npm install
# Create a .env file and add your MONGO_URI
node server.js
3. Frontend SetupBashcd frontend
npm install
npm start
The app will run on http://localhost:3000.👤 AuthorMuhammad Ubaid Roman 🎓 BS Computer Science Student | GCUF 🛡️ Certified Ethical Hacker | Tech Hustler - LinkedIn: My LinkedIn ProfileGitHub: @Rajaubaid786⭐ If you found this project helpful, give it a star!
