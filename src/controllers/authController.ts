import { Request, Response } from "express";

class AuthController {

    constructor() {
        console.log('Auth Controller Called');
    }

    display(req: Request, res: Response, next: Function) {
        res.send('welcome');
    }

}

export default new AuthController();