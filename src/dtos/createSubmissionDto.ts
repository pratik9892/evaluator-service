import z from "zod"

// export interface CreateSubmissionDto {
// 	userId : String,
// 	problemId : String,
// 	code : String,
// 	language : String
// }

// infer and create a type from zod schema
export type CreateSubmissionDtos = z.infer<typeof submissionValidation>

export const submissionValidation = z.object({
	userId : z.string(),
	problemId : z.string(),
	code : z.string(),
	language : z.string()
}).strict()