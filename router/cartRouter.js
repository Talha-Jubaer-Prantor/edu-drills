const express=require('express')
const cartControler=require('../controler/cartControler')
const router = express.Router()

router.get('/cart',cartControler)

module.exports=router