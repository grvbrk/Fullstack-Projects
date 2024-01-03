const express = require("express")
const { TodoRouter } = require("./Routes/Todos")
const {connectToDB} = require("./db/connect")
const app =  express()
require("dotenv").config()

app.use(express.json())
app.use("/", TodoRouter)

const PORT = process.env.PORT || 3000

async function start(){
    try {
        await connectToDB(process.env.MONGO_KEY)
        app.listen(PORT, console.log(`Sever is running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()


// Code Flow => Backend => Frontend => Auth => User logic

// Todo Routes (Can be accesses by anyone)
//   Create
//   Read
//   Update
//   Delete

// User Route (Use jwt auth)
//   Sign in
//   User Create
//   User Read
//   User Update
//   User Delete

