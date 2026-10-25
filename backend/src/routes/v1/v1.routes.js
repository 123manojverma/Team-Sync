import express from "express";

import channelRouter from "./channel.routes.js";
import memberRouter from "./member.routes.js";
import messageRouter from "./messages.routes.js";
import userRouter from "./users.routes.js";
import workspaceRouter from "./workspaces.routes.js";

const router=express.Router();

router.use('/users',userRouter);
router.use('/workspaces',workspaceRouter);
router.use('/channels',channelRouter);
router.use('/members',memberRouter);
router.use('/messages',messageRouter);

export default router;