const express=require('express')
const {loginControler,signin}=require('../controler/loginControler')
const router=express.Router()

router.get("/login", loginControler)
router.post("/signin",signin)

module.exports=router