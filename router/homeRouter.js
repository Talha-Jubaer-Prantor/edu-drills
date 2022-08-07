const express=require('express')
const homeControler=require('../controler/homeControler')
const router=express.Router()

router.get("/", homeControler)

module.exports=router