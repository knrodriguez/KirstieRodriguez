const axios = require("axios");
const { Media } = require("../server/models");

exports.handler = async (event, context) => {
  const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY_V3}`;
  const listUrl = `https://api.themoviedb.org/4/list/${process.env.LIST_ID}?api_key=${process.env.TMDB_API_KEY_V3}`;

  try {
    const { data: config } = await axios.get(configUrl);
    const { data: list } = await axios.get(listUrl, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const media = list.results.map((record) => {
      return new Media(config, record);
    });

    return {
      statusCode: 200,
      body: JSON.stringify(media),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.response.statusText,
    };
  }
};
