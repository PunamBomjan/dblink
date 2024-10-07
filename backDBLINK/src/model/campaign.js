const mongoose = require("mongoose");


const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  college : {
    type : String, 
    required : true
  },
  file: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
 
});

const Campaign = mongoose.model('Campaign', CampaignSchema);


module.exports =  Campaign ;
