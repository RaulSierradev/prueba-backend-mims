import { Request, Response } from "express";
import getBookById from "../../controllers/book/getBookbyId.controllers";

const bookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bookId = await getBookById(id);
    return bookById
      ? res.status(200).json(bookId)
      : res.status(400).json({ error: "ID not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default bookById;
