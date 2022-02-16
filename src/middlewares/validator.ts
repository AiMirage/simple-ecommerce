import { Request, Response } from "express";
import { param, body, validationResult } from "express-validator";

/**
 * Validator static class
 */
export default class Validator {

    static get routes() : any {
        return {

            /**
             * Register route
             */
            register: [
                ...Validator.userResource(),
                body('password_confirmation').custom((value, { req }) => {
                    if (value != req.body.password) throw new Error("Passwords don't match");
                    return true;
                })
            ],


        }
    }

    static validate(route: string) {
        console.log([Validator.routes[route] , Validator.validationResult]);
        return [Validator.routes[route] , Validator.validationResult];
    }

    static userResource() {
        return [

            // First Name
            body(
                'first_name',
                "'first_name' is required and must exceed 2 characters"
            ).isLength({ min: 3 }),

            // Last Name
            body(
                'last_name',
                "'last_name' is required and must exceed 2 characters",
            ).isLength({ min: 3 }),

            // Email
            body(
                'email',
                'invalid email address'
            ).isEmail(),

            // Password
            body(
                'password',
                "'password' is required and must exceed 4 characters"
            ).isLength({ min: 5 }),

        ]
    }

    static validationResult(req: Request, res: Response, next: Function) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        return next();
    }
}