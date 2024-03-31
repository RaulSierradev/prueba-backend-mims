import { Router } from "express";
import allBooks from "../handlers/book/allBooks.handlers";
import newBook from "../handlers/book/newBook.handlers";
import updateBook from "../handlers/book/updateBook.handlers";
import bookById from "../handlers/book/bookById.handlers";
import deleteBook from "../handlers/book/deleteBook.handlers";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, allBooks);
router.get("/:id", auth, bookById);
router.post("/", auth, newBook);
router.put("/:id", auth, updateBook);
router.delete("/:id",auth, deleteBook);

export default router;
