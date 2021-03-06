import { sequelize } from "../connection/dbconnection";
import { Model, DataTypes } from "sequelize";
export default class GuildConfig extends Model {
    public id: number;
    public guildId: string;
    //Config
    public prefix: string;
    public muted_role: string;
    public message_log: string;
    //public random_role: string;
    //public random_permitted_roles: Array<string>;

    public createdAt: Date;
    public updatedAt: Date;
}
let defaultConfig = JSON.stringify({
    prefix: "$",
    muted_role: "",
    message_log: "",
    default_role: "",
});

GuildConfig.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        guildId: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        prefix: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        muted_role: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        message_log: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        //TODO:
        // put them in a serperate table
        /**random_role: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        random_permitted_roles: {
            type: DataTypes.ARRAY,
            defaultValue: "",
        },*/
    },
    {
        sequelize,
        tableName: "configurations",
    }
);
GuildConfig.sync();
