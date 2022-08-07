const mongoose=require("mongoose")
const userSchema = require("../Schema/userSchema")
const User=mongoose.model("User",userSchema)
const bcrypt=require('bcrypt')


// Signup page
function signupControler(req,res,next){
    res.render('signup')

}

// signup funtion
async function register(req,res,next){
    const {name,email,phone}=req.body

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,parseInt(salt))
    console.log(hashedPassword)
    
    const newUser=new User({
        name:name,
        email:email,
        phone:phone,
        password:hashedPassword
    })
    newUser.save()
    .then(c=>{
        res.send("user created succsefully")
    })
    
    
    
    
    console.log(name,email,phone)
    
}

module.exports={
    signupControler,
    register
}