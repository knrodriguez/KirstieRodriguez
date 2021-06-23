const router = require('express').Router();
const axios = require('axios');
const {TMDB_API_KEY_V3, LIST_ID, getImageUri} = require('./../../secrets');
const {Media} = require('../models')

router.get('/tv-and-movies', async (req,res,next) => {
    try {
        const {data: config} = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY_V3}`);
        const {data: list} = await axios.get(`https://api.themoviedb.org/4/list/${LIST_ID}?api_key=${TMDB_API_KEY_V3}`, {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })

        const media = list.results.map(record => {
            return new Media(
                record.name, 
                getImageUri(config, record.poster_path),
                record.first_air_date.slice(0,4),
                record.overview
            )
        })
        
        res.send(media);
    } catch (error) {
        next(error);
    }
})

module.exports = router;