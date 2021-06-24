const {getImageUri} = require('./../../secrets.js');

module.exports = class {
    constructor(config, record){
        const { 
            id, 
            name, 
            poster_path,
            first_air_date,
            overview
        } = record;

        this.id = id;
        this.title = name;
        this.imgUrl = getImageUri(config, poster_path);
        this.year = first_air_date.slice(0,4);
        this.synopsis = overview;
    }
}
