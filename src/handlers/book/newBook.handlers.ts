import { Request, Response } from "express";
import setNewBook from "../../controllers/book/setNewBook.controllers";

const newBook = async (req: Request, res: Response) => {
  try {
    const theNewBook = await setNewBook(req.body);
    try {
      res.status(200).json(theNewBook);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newBook;
