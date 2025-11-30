import express from "express"
import { addSubmission } from "../../controllers/submissionController";
import {validateSchema} from "../../validators/submissionValidators"
import { submissionValidation } from "../../dtos/createSubmissionDto";

const submissionRouter = express.Router()

submissionRouter.post("/" , validateSchema(submissionValidation),addSubmission)

export default submissionRouter;