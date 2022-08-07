const express=require('express')
const {signupControler,register}=require('../controler/signupControler')
const router=express.Router()

router.get('/signup',signupControler)
router.post('/register',register)

module.exports=router