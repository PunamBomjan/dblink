const express = require('express')
const connection = require("./dbconnect/dbconnect")
const app = express()
const cors = require('cors');
const CampaignRoute = require('./routes/campaign')
const port = 3001

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
};

connection()
app.use(express.json());
app.use(cors(corsOptions))
app.use('/', CampaignRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})