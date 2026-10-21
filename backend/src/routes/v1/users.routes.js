import express from "express";

import { singUp } from "../../controllers/user.controller.js";
import { userSignUpSchema } from "../../validators/userSchema.js";
import { validate } from "../../validators/zodValidator.js";

const router=express.Router();

router.post('/signup',validate(userSignUpSchema),singUp)

export default router;