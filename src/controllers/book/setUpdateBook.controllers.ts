import { Book } from "../../models";

const setUpdateBook = async (update, id) => {
  const editBook = await Book.findByPk(id);
  if (!editBook) {
    throw new Error("Book not found");
  }
  try {
    await editBook.update(update);
    return editBook;
  } catch (error) {
    return { error: error.message };
  }
};

export default setUpdateBook;
