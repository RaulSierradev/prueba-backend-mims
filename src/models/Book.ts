import { DataTypes, Model } from "sequelize";
import db from "../config/bd";

interface BookAttributes {
  id: string;
  title: string;
  author: string;
  publicationYear: Date;
}

class Book extends Model<BookAttributes> implements BookAttributes {
  public id!: string;
  public title!: string;
  public author!: string;
  public publicationYear!: Date;
  static rawAttributes: any;

  // Aquí se define el modelo
  static initialize() {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        publicationYear: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        modelName: "books",
      }
    );
  }
}

// Inicializa el modelo
Book.initialize();

export default Book;
