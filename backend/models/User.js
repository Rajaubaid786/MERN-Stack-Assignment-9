const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Naam likhna zaroori hai']
    },
    email: {
        type: String,
        required: [true, 'Email likhna zaroori hai'],
        unique: true 
    },
    age: {
        type: Number,
        required: [true, 'Age likhna zaroori hai']
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);