require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.json())

app.get('/', (req,res) => {
    res.render("login")
})

app.get("/signup", (rec,res) => {
    res.render("SignUp")
})

app.get("/home", (rec,res) => {
    res.render("home")
})

const loginSchema = {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
}

const Users = mongoose.model("Users", loginSchema)

app.post("/SignUp", async(rec,res) => {
    const data = {
        name: rec.body.username,
        password: rec.body.password
    }
    const existingUser = await Users.findOne({name: data.name})
        if(existingUser){
            res.send("O usuário já está cadastrado, tente outro.")
        }else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds)

            data.password = hashedPassword

            const userdata = await Users.insertMany(data)
            console.log(userdata)
        }

    
})

app.post("/login", async(rec,res) => {
    try{
        const check = await Users.findOne({name: rec.body.name})
        if(!check){
            res.send("O usuário não está cadastrado")
        }

        const passwordcheck = await bcrypt.compare(rec.body.password, Users.password)
        if(passwordcheck){
            res.render("home")
        }else{
            rec.send("A senha está incorreta.")
        }
    }catch{
        res.render("home")
    }

})

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ccrzqgy.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
    console.log("Servidor Conectado")
}).catch((err) => console.log(err))

