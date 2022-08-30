const mongoose = require('mongoose')

const connectionString = `mongodb+srv://suchita:wikihow12538@nodejs-express.bvozceb.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority`

const connectDB = (url)=>{
    mongoose
    .connect(connectionString)
}

module.exports = connectDB