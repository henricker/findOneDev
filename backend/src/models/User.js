const mongoose = require('../database/connection');

const userSchema = mongoose.Schema({
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

    createdAt: {
        type: 'date',
        default: new Date(),
    }
});

const User = mongoose.model('User', userSchema);