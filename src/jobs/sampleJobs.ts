import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefintion";

export default class SampleJob implements IJob {
    name : string;
    payload?: Record<string, unknown>; 
    constructor(payload:Record<string,unknown>){
        this.payload = payload;
        this.name = this.constructor.name
    }
    handler =  (job?:Job) => {
        console.log("Handler of the job called");

        if(job){
            console.log(job.data , job.name, job.id);
            
        }
    }
    failed = (job?:Job):void => {
        console.log("Job Failed ");
        if(job){
            console.log(job.id);
        }
    }
}