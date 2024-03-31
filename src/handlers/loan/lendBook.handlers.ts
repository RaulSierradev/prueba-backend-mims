import { Request, Response } from "express";
import setLendBook from "../../controllers/loan/setLendBook.controllers";

const lendBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  try {
    const creteLendBook = await setLendBook(req.body, userId, bookId);
    res.status(200).json(creteLendBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default lendBook;
