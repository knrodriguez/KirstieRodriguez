const getImageUri = (config, path) => {
  const { base_url } = config.images;
  return `${base_url}original${path}`;
};

module.exports = class {
  constructor(config, record) {
    const { id, name, poster_path, first_air_date, overview } = record;

    this.id = id;
    this.title = name;
    this.imgUrl = getImageUri(config, poster_path);
    this.year = first_air_date.slice(0, 4);
    this.synopsis = overview;
  }
};
