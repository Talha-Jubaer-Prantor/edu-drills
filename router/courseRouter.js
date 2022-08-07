const express= require('express')
const courseControler=require('../controler/courseControler')
const router=express.Router()

router.get('/course',courseControler)

module.exports=router