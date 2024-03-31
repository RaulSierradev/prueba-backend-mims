import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const db = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default db;
