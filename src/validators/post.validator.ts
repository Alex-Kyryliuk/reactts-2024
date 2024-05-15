import Joi from "joi";

export const postValidator =
    Joi
        .object({
            body: Joi.string()
                .pattern(/^[a-z0-9_-]+$/)
                .required()
                .messages({"string.required": 'body is required'}),
            title: Joi.string()
                .pattern(/^[a-z0-9_-]+$/)
                .required()
                .messages({"string.required": 'title is required'}),
            userId: Joi.number()
                .min(1)
                .max(10)
                .required()
                .messages({
                    "number.required": 'userId is required',
                    "number.min": 'userId cannot be min 1',
                    "number.max": 'userId cannot be max 10'})
        })
