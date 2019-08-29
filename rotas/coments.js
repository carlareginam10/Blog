const express = require('express')
const router = express.Router()

router.get('/coments/:postid',(req, res)=>{
    res.json({
        content: "you post is the better",
        author: "carla"
    })
})

module.exports = router