import { Loan, Book, User } from "../../models";

const setLendBook = async (
  data: { loanDate: Date },
  userId: string,
  bookId: string
) => {
  try {
    const { loanDate } = data;
    // Verificar si existe el usuario
    const userExist = await User.findByPk(userId);
    if (!userExist) {
      throw new Error("User doesn't exist");
    }

    // Verificar si el libro existe
    const bookExist = await Book.findByPk(bookId);
    if (!bookExist) {
      throw new Error("Book doesn't exist");
    }

    // Crea el préstamo asociado al usuario y al libro
    const loanBook = await Loan.create({
      loanDate,
      userId: userId,
      bookId: bookId,
    });
    return loanBook;
  } catch (error) {
    // Maneja los errores
    throw new Error(error);
  }
};

export default setLendBook;
