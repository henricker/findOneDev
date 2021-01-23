const mongoose = require('../database/connection');

const devSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true,
    },
    
    github: {
        type: 'string',
        require: true,
    },

    linkedin: {
        type: 'string',
        require: false,
    },

    avatar_url: {
        type: 'string',
        require: false,
    }, 

    bio: {
        type: 'string',
        require: true,
    },

    email: {
        type: 'string',
        require: true,
        unique: true,
        lowercase: true,
    },

    createdAt: {
        type: 'date',
        default: new Date(),
        required: true,
    }
});

const Dev = mongoose.model('Dev', devSchema);

module.exports = Dev;