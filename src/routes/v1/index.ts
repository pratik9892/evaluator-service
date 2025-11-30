import express from "express"
import { pingController } from "../../controllers/pingController.js";
import submissionRouter from "./submissionRoute.js";

const v1Router = express.Router()

v1Router.use("/submission" , submissionRouter)
v1Router.get("/ping" , pingController)

export default v1Router;