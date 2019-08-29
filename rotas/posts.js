const express = require('express')
const router = express.Router()

router.get('/posts',(req, res)=>{
    res.json({
        title: 'My firt post',
        content: "I love programming",
        author: "carla"
    })
})

module.exports = router