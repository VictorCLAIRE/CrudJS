const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CafeSchema = new mongoose.Schema({
    nomCafe: {type: String},
    descriptionCafe: {type: String},
    prixCafe: {type: Number},
    imageCafe: {type: String},
    OrigineCafe: {type: String}
});

module.exports = mongoose.model('cafes', CafeSchema, 'cafes');
