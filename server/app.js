import express from "express";
import router from "./routes/routes.js"
import cors from 'cors'
import connectDB from "./Config/database.js";



const app = express()


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()

app.use(router)

export default app