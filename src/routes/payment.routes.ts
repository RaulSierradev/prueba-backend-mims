import { Router } from "express";
import { createSession } from "../controllers/payment/payment.controllers";

const router = Router();

router.get("/", createSession)

export default router;