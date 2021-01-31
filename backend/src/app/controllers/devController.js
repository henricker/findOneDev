const Dev = require('../model/Dev');
const axios = require('axios');
const parseStringAsArray = require('../../util/parseStringToArray');
module.exports = {

    async store(request, response) {
        try{
            let dev = { 
                github_username: request.body.github_username,
                latitude: request.body.latitude,
                longitude: request.body.longitude,
                techs: parseStringAsArray(request.body.techs),
            }

            //basic validations
            if(!dev.github_username)
                return response.status(400).send({Error: 'Username field not provided'});
            if(!dev.techs)
                return response.status(400).send({Error: 'Techs field not provided'});
            if(!dev.latitude)
                return response.status(400).send({Error: 'Latitude field not provided'});
            if(!dev.longitude)
                return response.status(400).send({Error: 'Longitude field not provided'});
            
            dev['location'] = {
                "type" : "Point",
                "coordinates" : [ dev.latitude, dev.longitude]
            }

            if(await Dev.findOne({github_username: dev.github_username}))
                return response.status(400).send({error: "User alredy exists!"});
            
            const dataGithubUser = await axios.get(`https://api.github.com/users/${dev.github_username}`);
            
            dev['name'] = dataGithubUser.data.name;
            dev['bio'] = dataGithubUser.data.bio;
            dev['avatar_url'] = dataGithubUser.data.avatar_url;

            await Dev.create({
                name: dev.name,
                github_username: dev.github_username,
                location: dev.location,
                techs: dev.techs,
                avatar_url: dev.avatar_url,
                bio: dev.bio
            });

            return response.send({dev});
    }
    catch(err) {
        console.error(err);
        return response.send({Error: "Access database denied!"});
    }
        
    },

    async index(request, response) {
        const Devs = await Dev.find();

        return response.send({Devs});
    }


}