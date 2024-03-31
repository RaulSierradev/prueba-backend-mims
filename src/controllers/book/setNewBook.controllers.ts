import { Book } from "../../models";

const setNewBook = async (data) => {
  const { title, author, publicationYear } = data;

  const book = await Book.create({
    title,
    author,
    publicationYear,
  });
  return book;
};

export default setNewBook;
