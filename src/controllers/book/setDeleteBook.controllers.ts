import { Book } from "../../models";

const setDeleteBook = async (id) => {
  try {
    const book = await Book.findByPk(id);
    await book.destroy();
    return "The book has been removed";
  } catch (error) {
    throw new Error(`the ${id} has not been found`);
  }
};

export default setDeleteBook;
