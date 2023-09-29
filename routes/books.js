const router = require('express').Router();

router.get("/",(req,res)=>{
    res.render("books")
})

module.exports = router;