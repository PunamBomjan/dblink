
const Campaign = require('../model/campaign')
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose');
const io = require('../socket');
const addToPost = async (req, res) => {

  

   
    try {
        const post = req.body.post
        const file = req.file.filename
        const userId = req.body.userId
        const title = req.body.title
        const username= req.body.username
        const college = req.body.college
    
      
       

       
        if (!post || !userId) {
            res.status(400).json({
                msg: "Post and User Id requiered"
            })
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            res.status(400).json({
                msf: "User Id Invalid"
            })
        }

        const postData = {
          post : req.body.post,
          file : req.file.filename,
          userId : req.body.userId,
          title : req.body.title,
          username : req.body.username,
          college : req.body.college,

        }
        

        const newPost = await Post.create(postData)

            io.getIO().emit('newPost', newPost);
      
        if (newPost) {
            res.status(200).json({
                msg: "post added successfully"
            })
        }


    } catch (e) {
        console.log(e)
        res.status(500).json({
            msg : e
        })
    }

}



    const getPosts = async (req, res) => {
        const data = await Post.find()
      
        res.json({
            msg : "Data received successfully",
            data : data
        })
        
    }

    const getCampaignimage = async (req, res) => {
        try {
          const data = await Post.findById(req?.params?.id); 
          const imagePath = path.join(
            __dirname,
            "../../uploads",
            data.file
          ); //acessing the imagePath
          const defaultPath = path.join(
            __dirname,
            "../../uploads",
            ""
          ); //giving the default image if not uploaded
      
          if (fs.existsSync(imagePath) && data.file) {
            res.sendFile(imagePath);
          } else {
            res.sendFile(defaultPath);
          }
        } catch (err) {
          console.log(err);
        }
      };


    module.exports = { addToPost, getPosts, getCampaignimage }