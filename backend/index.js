import express from "express"
import mongoose from "mongoose"
import MainPage from "./routes/index.js"
import cors from "cors"
const app = express()
const uri = 'mongodb+srv://ddonierov96:<password>@data.l0xaeva.mongodb.net/?retryWrites=true&w=majority'

app.use("/routes/uploads", express.static('./routes/uploads/'))
app.use(cors({
    origin: '*'
}))



app.use('/api', MainPage)


function Server() {
    const PORT = process.env.PORT ?? 8000
    mongoose.connect(uri)
        .then(res => console.log('MongoDB connected'))
        .catch((err) => console.log("MongoDB can't connect , because " + err))
    app.listen(PORT, () => {
        console.log("Server are running on port " + PORT);
    })
}

Server()