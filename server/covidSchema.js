var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CovidSchema = new Schema({
    countryId: {
        type: Number,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    totalCases: {
        type: Number,
        required: true
    },
    totalDeath: {
        type: Number,
        required: true
    },    
    totalRecoved: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Covid", CovidSchema);
