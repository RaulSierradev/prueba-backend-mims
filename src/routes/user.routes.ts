import { Router } from "express";
import newUser from "../handlers/users/newUser.handlers";
import loginUser from "../handlers/users/loginUser.handlers";

const router = Router();

router.post("/register", newUser);
router.post("/login", loginUser);

export default router;
