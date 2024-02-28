const express = require('express')
const app = express()

//View engine
app.set("view engine","ejs")

//Folder public
app.use(express.static('public'))

//const router = express.Router()

app.get("/", (req,res)=>{
    res.render("index")
})


//module.exports = router
app.listen(8080, console.log("Server started"))
