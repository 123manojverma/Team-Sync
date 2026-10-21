import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

import { customErrorResponse } from "../utils/common/responseObject.js";

export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            return next();
        } catch (error) {
            if (!(error instanceof ZodError)) {
                return next(error);
            }

            console.log('Validation error in zod validator', error);
            const explanation = error.issues.map((issue) => {
                const field = issue.path.join('.');
                return field ? `${field}: ${issue.message}` : issue.message;
            });

            return res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse({
                message: 'Validation error',
                explanation
            }));
        }
    }
}