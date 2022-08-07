const express= require("express")


const homeRouter=require('./router/homeRouter')
const loginRouter=require('./router/loginRouter')
const signupRouter=require('./router/signupRouter')
const courseRouter=require('./router/courseRouter')
const cartRouter=require('./router/cartRouter')
const { default: mongoose } = require("mongoose")

const app=express()

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set('view engine', 'ejs')



app.get("/", homeRouter)
app.get("/login", loginRouter)
app.get("/signup",signupRouter)
app.get("/course",courseRouter)
app.get("/cart",cartRouter)
app.post("/register", signupRouter)
app.post("/signin", loginRouter)

// Database connection
mongoose.connect("mongodb+srv://cluster0:cluster0@cluster0.hacpu.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true })
        .then(()=>{
            console.log('connection succesful')
        })
        .catch(err=>{
            console.log(err)
        })

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
    
