import express, { json, text, urlencoded } from "express"
import serverConfig from "./config/serverConfig.js"
import apiRouter from "./routes/index.js"
import sampleQueueProducer from "./producers/sampleQueueProducer.js"
import sampleWorker from "./workers/sampleWorker.js"
import { createBullBoard } from "@bull-board/api"
import { ExpressAdapter } from "@bull-board/express"
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter"
import sampleQueus from "./queues/sampleQueus.js"

const app= express()
app.use(urlencoded())
app.use(json())
app.use(text())
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(sampleQueus)], // Add your queue(s) here
  serverAdapter: serverAdapter,
});

app.use('/admin/queues', serverAdapter.getRouter())

app.get("/" , (req,res) => {
    res.json({
        "message" : "Hello from /"
    })
})

app.use("/api" , apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is listening at ${serverConfig.PORT}`);
})