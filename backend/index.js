import express from "express"
import mongoose from "mongoose"
import MainPage from "./routes/index.js"
import cors from "cors"
const app = express()


app.use("/routes/uploads", express.static('./routes/uploads/'))
app.use(cors({
    origin: '*'
}))



app.use('/api', MainPage)


function Server() {
    const PORT = process.env.PORT ?? 8000
    app.listen(PORT, () => {
        console.log("Server are running on port " + PORT);
    })
}

Server()