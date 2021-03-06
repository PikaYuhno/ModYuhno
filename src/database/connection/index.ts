import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const createConnection = () => {
    let conn = new Sequelize(
        "postgres",
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: "postgres",
            logging: false,
        }
    );
    return conn;
};
export const sequelize = createConnection();

