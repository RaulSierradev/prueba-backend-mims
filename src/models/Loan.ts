import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "loans",
})
class Loan extends Model {
  @Column({
    type: DataType.TEXT,
  })
  userId: String;
  @Column({
    type: DataType.TEXT,
  })
  bookId: String;
  @Column({
    type: DataType.TEXT,
  })
  loanDate: String;
}

export default Loan;
