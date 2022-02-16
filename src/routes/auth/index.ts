import { Router } from "express";
import Controller from "../../controllers/authController";
import Validator from "../../middlewares/validator";

const router = Router();

router.post('/login', Validator.validate('register'), Controller.display);

export default router;