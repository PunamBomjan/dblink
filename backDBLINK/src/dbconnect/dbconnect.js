const mongoose = require('mongoose');
const connectDb = async() => {
    const connect = await mongoose.connect('mongodb://localhost:27017/DBLINK');

    if(connect){
      console.log(`database connection successfull`)
    }else{
      console.log("database connection failed")
    }
  }

module.exports = connectDb