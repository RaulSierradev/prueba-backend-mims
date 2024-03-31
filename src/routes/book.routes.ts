import { Router } from "express";
import allBooks from "../handlers/book/allBooks.handlers";
import newBook from "../handlers/book/newBook.handlers";
import updateBook from "../handlers/book/updateBook.handlers";
import bookById from "../handlers/book/bookById.handlers";
import deleteBook from "../handlers/book/deleteBook.handlers";

const router = Router();

router.get("/", allBooks);
router.get("/", bookById);
router.post("/", newBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
