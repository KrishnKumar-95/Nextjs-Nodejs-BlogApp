import { Router } from "express";
import postRoutes from "./Post.mjs"

const router = Router();

/* Register all routes here and export and use it as single route in main file */
router.use(postRoutes);

export default router;