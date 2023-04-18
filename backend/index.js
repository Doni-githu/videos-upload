import express from "express"
import mongoose from "mongoose"
import MainPage from "./routes/video.js"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
import UserAPI from "./routes/user.js"
const app = express()

app.use("/routes/uploads", express.static('./routes/uploads/'))
app.use(cors({
    origin: 'http://localhost:5173'
}))



app.use('/api/videos', MainPage)
app.use('/api/users', UserAPI)

function Server() {
    const PORT = process.env.PORT ?? 8000
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://127.0.0.1:27017/first', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    })
        .then((res) => console.log("Mongo DB are connected"))
        .catch((err) => console.log("Mongo DB can't connect, because " + err))
    app.listen(PORT, () => {
        console.log("Server are running on port " + PORT);
    })
}

Server()