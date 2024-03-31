import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
})
class User extends Model {
  @Column({
    type: DataType.TEXT,
  })
  title: String;
  @Column({
    type: DataType.TEXT,
  })
  author: String;
  @Column({
    type: DataType.TEXT,
  })
  publicationYear: String;
}

export default User;
