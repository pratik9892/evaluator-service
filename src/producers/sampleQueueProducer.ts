import sampleQueue from "../queues/sampleQueus";

export default async function(name:string,payload:Record<string,unknown>){
    console.log("Job Added to queue");
    
    await sampleQueue.add(name,payload)
}