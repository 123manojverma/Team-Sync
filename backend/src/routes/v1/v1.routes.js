import express from "express";

import userRouter from "./users.routes.js";
import workspaceRouter from "./workspaces.routes.js";

const router=express.Router();

router.use('/users',userRouter);
router.use('/workspaces',workspaceRouter);

export default router;