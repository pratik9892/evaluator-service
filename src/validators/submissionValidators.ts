import { ZodSchema } from "zod"
import { CreateSubmissionDtos } from "../dtos/createSubmissionDto"
import { NextFunction, Request, Response } from "express"

export const validateSchema = (schema : ZodSchema<any>) => (req:Request,res:Response,next:NextFunction) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error);
         return res.status(400).json({
            status : false,
            error : error,
            message : "Data is Invalid",
            data : {}
         })
    }  
}