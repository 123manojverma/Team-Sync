import express from "express";

import { isMemberPartOfWorkspaceController } from "../../controllers/member.controller.js";
import { isAuthenticated } from "../../middlewares/authMiddleware.js";

const router=express.Router();

router.get('/:workspaceId',isAuthenticated,isMemberPartOfWorkspaceController)

export default router;