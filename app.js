const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

// middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

app.get('/hello', (req, res) => {
    res.send('Task Manager App - Hello')
})



// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new tasks
// app.get('/api/v1/tasks/:id') - get single tasks
// app.patch('api/v1/tasks:id') - update tasks
// app.delete('/api/v1/tasks/:id') - delete task


const port = 3000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()