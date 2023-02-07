import { DataTypes, Model } from 'sequelize';

import sequelize from '../utils/database';
import { Type } from './type';


export class Word extends Model {
    declare typeId: number;
    declare word: string;

    public static getTypeWords(): string[] {
        return ['the', 'they', 'are', 'those'];
    }
}

Word.init({
    word: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'word' });

Word.belongsTo(Type, { constraints: true, onDelete: 'CASCADE' });