const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 

dotenv.config();

connectDB();

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

app.use('/api/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Backend API aur Database dono Ready hain! 🔥');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🌟`);
});