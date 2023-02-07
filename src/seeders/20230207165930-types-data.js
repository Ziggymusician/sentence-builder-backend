'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date();
    const types = [];

    console.log('STARTING TO SEED: TYPES');

    const typeArray = [
      'Adjective', 'Adverb', 'Conjunction', 'Determiner', 
      'Exclamation', 'Noun', 'Preposition', 'Pronoun', 'Verb'
    ];

    typeArray.forEach(type => {
      types.push({ value: type, createdAt: date, updatedAt: date });
    });

    console.log('SEEDING TYPES:', JSON.stringify(types));
    const resp = await queryInterface.bulkInsert('types', types, {});
    console.log('RESPONSE:', JSON.stringify(resp));
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
