module.exports = class {
  constructor(game) {
    const { id, name, description, released, background_image, website } = game;

    this.id = id;
    this.title = name;
    this.imgUrl = background_image;
    this.year = released.slice(0, 4);
    this.synopsis = description;
    this.website = website;
  }
};
