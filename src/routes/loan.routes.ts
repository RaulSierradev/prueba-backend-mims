import { Router } from "express";
import lendBook from "../handlers/loan/lendBook.handlers";
import retunrBook from "../handlers/loan/returnBook.handlers";

const router = Router();

router.post("/:userId/:bookId", lendBook);
router.put("/:id", retunrBook);

export default router;
