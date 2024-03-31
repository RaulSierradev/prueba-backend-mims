import { Request, Response } from "express";
import setDeleteBook from "../../controllers/book/setDeleteBook.controllers";

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await setDeleteBook(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteBook;
