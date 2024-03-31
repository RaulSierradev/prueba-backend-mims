import { Request, Response } from "express";
import setUpdateBook from "../../controllers/book/setUpdateBook.controllers";

const updateBook = async (req: Request, res: Response) => {
  const bookEdit = req.body;
  const idBook = req.params.id
  try {
    const editBook = await setUpdateBook(bookEdit, idBook);
    res.status(200).json(editBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default updateBook;
