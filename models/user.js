var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }

});


module.exports = mongoose.model('user', user);