import { Book } from "../../models";

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

export default getAllBooks;
