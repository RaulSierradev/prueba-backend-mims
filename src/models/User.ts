import { DataTypes, Model } from "sequelize";
import db from "../config/bd";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;

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
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        modelName: "users",
      }
    );
  }
}

// Inicializa el modelo
User.initialize();

export default User;