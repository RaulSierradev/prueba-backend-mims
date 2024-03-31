import { Book } from "../../models";

const getBookById = (id) => {
  try {
    const book = Book.findOne({
      where: { id: id },
    });
    return book;
  } catch (error) {
    return error.message;
  }
};

export default getBookById;
