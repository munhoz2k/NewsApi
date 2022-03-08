import { Router } from "express";
import { router as newsRoutes } from "./news.routes";

const router = Router()

router.use('/', newsRoutes)

export { router }