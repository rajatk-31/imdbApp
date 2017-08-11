var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var movies = new Schema({
    /*poster: {
        data: Buffer,
        contentType: String
    },*/
    posterUrl {
        type: String
    },
    title: {
        type: String
    },
    releaseDate: {
        type: String
    },
    writer: [],
    director: {
        type: String
    },
    plot: {
        type: String
    },
    runtime: {
        type: String
    },
    genre: {
        type: String
    },
    actors: []
});

module.exports = mongoose.model('movies', movies);