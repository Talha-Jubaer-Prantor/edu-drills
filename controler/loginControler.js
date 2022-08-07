function loginControler(req,res,next){
    res.render('login')
}

function signin(req,res,next){
    const {email,password}=req.body
    console.log(email,password)
}

module.exports={
    loginControler,
    signin
}