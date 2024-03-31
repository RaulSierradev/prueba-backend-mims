import { Request, Response } from "express";
import setReturnBook from "../../controllers/loan/setReturnBook.controllers";

const retunrBook = async (req: Request, res: Response) => {
  const bookReturn = req.body;
  const idLoan = req.params.id;
  try {
    const retBook = await setReturnBook(bookReturn, idLoan);
    res.status(200).json(retBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default retunrBook
