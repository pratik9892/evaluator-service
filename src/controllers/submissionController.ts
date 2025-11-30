import { Request, Response } from "express";
import { CreateSubmissionDtos } from "../dtos/createSubmissionDto";

export function addSubmission(req:Request,res:Response){
    const submission = req.body as CreateSubmissionDtos;

    return res.status(201).json({
        status : true,
        error : {},
        message : "Submission added succesfully",
        data : submission
    })
}