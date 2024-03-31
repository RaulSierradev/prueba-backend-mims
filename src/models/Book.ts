import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "books",
})
class Book extends Model {
  @Column({
    type: DataType.TEXT,
  })
  name: String;
  @Column({
    type: DataType.TEXT,
  })
  email: String;
  @Column({
    type: DataType.TEXT,
  })
  password: String;
}

export default Book;
