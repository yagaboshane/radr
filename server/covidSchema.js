var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    countryId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    developers: [{
       type: Schema.Types.ObjectId, ref: "users", required: true  //developers
    }],
    managers: [{
      type: Schema.Types.ObjectId, ref: "users", required: true   //pm
    }],
    stardate: {
        type: Date,
        required: true
    },
    enddate: {
      type: Date,
      required: true
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
