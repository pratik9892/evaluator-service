import express from "express"
import { serverConfig } from "./config/serverConfig.js"
import apiRouter from "./routes/index.js"

const app= express()

app.get("/" , (req,res) => {
    res.json({
        "message" : "Hello from /"
    })
})

app.use("/api" , apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is listening from PORT ${serverConfig.PORT}`);
    console.log("Server is ready");
    
})