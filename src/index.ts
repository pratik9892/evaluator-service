import express from "express"
import serverConfig from "./config/serverConfig.js"
import apiRouter from "./routes/index.js"
import sampleQueueProducer from "./producers/sampleQueueProducer.js"
import sampleWorker from "./workers/sampleWorker.js"

const app= express()

app.get("/" , (req,res) => {
    res.json({
        "message" : "Hello from /"
    })
})

app.use("/api" , apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is listening at ${serverConfig.PORT}`);

    sampleWorker("SampleQueue");

    sampleQueueProducer('SampleJob',{
        name : "Pratik",
        company : null,
        position : "At Home",
        location : "At Home"
    })
})