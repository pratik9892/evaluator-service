import { Job, Worker } from "bullmq";
import { WorkerResponse } from "../types/bullMqResponseWorker";
import SampleJob from "../jobs/sampleJobs";
import redisConnection from "../config/redisConfig";

export default function sampleWorker(queuename:string){
        new Worker(
        queuename,
        async (job:Job)=> {
            console.log("Sample job worker");
            
            if(job.name === "SampleJob"){
                const sampleJobInstance = new SampleJob(job.data)

                sampleJobInstance.handler(job)

                return true;
            }
        },
        {
            connection : redisConnection
        }
    )
}