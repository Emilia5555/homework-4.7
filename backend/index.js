/// have a database with people and pet tables
// database name => animal lovers
// people table: id, owner's name, age, location, pet
// pets table: id, pet name, type

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const peepsRoutes = require("./routers/peopleRoutes")

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{

    res.status(200).json("This is our home route")
})

app.use("/people", peepsRoutes)


//TODO -  CREATE Pets route, controller


app.listen(port, ()=>{
    console.log("My server is working")
})