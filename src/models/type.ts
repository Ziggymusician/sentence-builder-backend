import { DataTypes, Model } from 'sequelize';

import sequelize from '../utils/database';


export class Type extends Model {
    declare id: number;
    declare value: string;
}

Type.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'type' });