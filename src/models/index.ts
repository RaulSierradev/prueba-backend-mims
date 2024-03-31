import Book from "./Book";
import Loan from "./Loan";
import User from "./User";

// Llama al método associate para establecer las asociaciones
Loan.associate({ User, Book });

export { Book, Loan, User };
