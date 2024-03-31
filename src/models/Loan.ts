import { DataTypes } from "sequelize";
import db from "../config/bd";

const Loan = db.define("loans", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  loanDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Loan;
