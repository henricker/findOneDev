const mongoose = require('../../database/connect');
const pointSchema = require('../util/pointSchema');

const devSchema = new mongoose.Schema({
    github_username: {
        type: 'string',
        unique: true,
        required: true,
    },

    name: { 
        type: 'string',
        required: true,
    },

    bio: { 
        type: 'string', 
        required: false
    },

    techs:[String],
    
    avatar_url: {
        type: 'string', 
        required: false,
    },

    location: {
        type: pointSchema,
        index: '2dsphere'
    }
});

const Dev = mongoose.model('Dev', devSchema);

module.exports = Dev;