import { Router } from "express";
import lendBook from "../handlers/loan/lendBook.handlers";
import retunrBook from "../handlers/loan/returnBook.handlers";
import auth from "../middleware/auth";

const router = Router();

router.post("/:userId/:bookId", auth, lendBook);
router.put("/:id", auth, retunrBook);

export default router;
