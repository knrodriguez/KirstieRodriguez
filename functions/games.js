const axios = require("axios");
const gameSlugs = require('../public/data/games');
const { Game } = require("../server/models");

exports.handler = async (event, context) => {
  const gameUrl = (id) => `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`;

  const getGame = async (slug) => {
    const { data: game } = await axios.get(gameUrl(slug));
    return new Game(game);
  }

  try {
    const games = await Promise.all(gameSlugs.map(getGame))

    return {
      statusCode: 200,
      body: JSON.stringify(games),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.response.statusText,
    };
  }
};