const router = require('express').Router();
const axios = require('axios');
const {Media} = require('./../models');
require('dotenv').config();

const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY_V3}`;
const listUrl = `https://api.themoviedb.org/4/list/${process.env.LIST_ID}?api_key=${process.env.TMDB_API_KEY_V3}`;

router.get('/tv-and-movies', async (req,res,next) => {
    try {
        const {data: config} = await axios.get(configUrl);
        const {data: list} = await axios.get(listUrl, {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
        const media = list.results.map(record => new Media(config, record))
        res.send(media);
    } catch (error) {
        next(error);
    }
})

module.exports = router;