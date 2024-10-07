const express = require("express")
const app = express.Router()
const Campaign = require('../controller/campaign')
// const CampaignController = require('../controller/campaign')
app.post('/addCampign', Campaign.addToPost)


module.exports = app