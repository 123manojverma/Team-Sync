import express from "express";

import { signIn, singUp } from "../../controllers/user.controller.js";
import { userSignInSchema, userSignUpSchema } from "../../validators/userSchema.js";
import { validate } from "../../validators/zodValidator.js";

const router=express.Router();

router.post('/signup',validate(userSignUpSchema),singUp)
router.post('/signin',validate(userSignInSchema),signIn)

export default router;