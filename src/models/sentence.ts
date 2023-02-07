import { DataTypes, Model } from 'sequelize';

import sequelize from '../utils/database';

export class Sentence extends Model {
    declare sentence: string;
}

Sentence.init({
    sentence: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { sequelize,  modelName: 'sentence' });
