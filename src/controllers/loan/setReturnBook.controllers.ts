import { Loan } from "../../models";

const setReturnBook = async (loan, id) => {
  const returnBook = await Loan.findByPk(id);
  if (!returnBook) {
    throw new Error("Loan not found");
  }
  try {
    await returnBook.update(loan);
    return returnBook;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default setReturnBook;
