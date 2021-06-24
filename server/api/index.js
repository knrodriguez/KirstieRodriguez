const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
const {Media} = require('./../models')

router.get('/tv-and-movies', async (req,res,next) => {
    try {
        const {data: config} = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY_V3}`);
        const {data: list} = await axios.get(`https://api.themoviedb.org/4/list/${process.env.LIST_ID}?api_key=${process.env.TMDB_API_KEY_V3}`, {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })

        const media = list.results.map(record => {
            return new Media(config, record)
        })
        res.send(media);
    } catch (error) {
        next(error);
    }
})

module.exports = router;