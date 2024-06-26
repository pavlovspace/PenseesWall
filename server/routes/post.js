const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post = mongoose.model("Post") 
// var Post = require('../models/Post')

// View all posts route
router.get('/allpost', (req,res)=>{
    // Post.find()
    // .populate("postedBy","_id name")
    // .populate("comments.postedBy","_id name")
    // .sort('-createdAt')
    // .then((posts)=>{
    //     res.json({posts})
    // }).catch(err=>{
    //     console.log(err)
    // })
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
            console.log(err)
    })
})


router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,pic} = req.body 
    if(!title || !body || !pic){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

// All post created by signed In user, MYPOST
router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router  