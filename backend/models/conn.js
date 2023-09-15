const {Sequelize} = require("sequelize")

// Connect to database
const connectToDB = new Sequelize("animal_lovers_jdn1", "william", "hcR8fyXPa8wUWHfCkVgxokz0y1iKGSBu", {
    host:"dpg-ck2efl36fquc73c6p420-a.oregon-postgres.render.com",
    dialect:"postgres",
    dialectOptions: { //Need to add this as connecting to the database
        ssl: true
    }
})

async function testConnection(){

    try{

        await connectToDB.authenticate()
        console.log("You have successfully connected to the database")
        return true

    } catch (error){

        console.error("This is the Database connection error: ", error)
        return false
    }
}

// testConnection()

module.exports = {connectToDB, testConnection}
