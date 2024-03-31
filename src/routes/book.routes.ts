import { Router } from "express";
import allBooks from "../handlers/book/allBooks.handlers";
import newBook from "../handlers/book/newBook.handlers";

const router = Router();

router.get("/", allBooks);
router.post("/", newBook);

export default router;
