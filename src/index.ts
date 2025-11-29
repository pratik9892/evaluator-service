import express from "express"
import { serverConfig } from "./config/serverConfig.js"

const app= express()

app.get("/" , (req,res) => {
    res.json({
        "message" : "Hello from /"
    })
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server is listening from PORT ${serverConfig.PORT}`);
    console.log("Server is ready");
    
})