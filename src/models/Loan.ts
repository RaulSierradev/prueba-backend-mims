import { DataTypes, Model } from "sequelize";
import db from "../config/bd";

interface LoanAttributes {
  id: string;
  userId: string;
  bookId: string;
  loanDate: Date;
  returnDate: Date;
}

class Loan extends Model<LoanAttributes> implements LoanAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public loanDate!: Date;
  public returnDate!: Date;

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
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        bookId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        loanDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        returnDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        modelName: "loans",
        timestamps: false,
      }
    );
  }
}

// Inicializa el modelo
Loan.initialize();

export default Loan;