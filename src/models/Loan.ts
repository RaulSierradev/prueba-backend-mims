import { DataTypes, Model } from "sequelize";
import db from "../config/bd";

interface LoanAttributes {
  id: string;
  loanDate: Date;
  returnDate?: Date;
  userId?: string;
  bookId?: string;
}

class Loan extends Model<LoanAttributes> implements LoanAttributes {
  public id!: string;
  public loanDate!: Date;
  public returnDate?: Date;
  public userId?: string;
  public bookId?: string;

  static associate(models: any) {
    Loan.belongsTo(models.User, { foreignKey: "userId" });
    Loan.belongsTo(models.Book, { foreignKey: "bookId" });
  }

  static initialize() {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        loanDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        returnDate: {
          type: DataTypes.DATEONLY,
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

Loan.initialize();

export default Loan;
