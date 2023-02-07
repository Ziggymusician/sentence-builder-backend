'use strict';

const adjectives = [
  'Adorable', 'Bad', 'Calm', 'Careful', 'Cute', 'Dizzy', 'Evil', 'Fair', 
  'Fine', 'Handsome', 'Lazy', 'Modern', 'Nice', 'Perfect', 'Poor', 'Real',
  'Scary', 'Stupid', 'Thoughtful', 'Ugly', 'Victorious', 'Weary', 'Wrong'
];

const adverbs = [
  'Accidentally', 'Almost', 'Briefly', 'Calmly', 'Deeply', 'Easily', 'Fast',
  'Fully', 'Gently', 'Highly', 'Jealously', 'Knowledgeably', 'Lazily', 'Madly',
  'More', 'Naturally', 'Unexpectedly', 'Very', 'Weakly', 'Yearly'
];

const conjunctions = [
  'According', 'Also', 'At last', 'Because', 'Finally', 'For instance', 'Furthermore',
  'Hence', 'Lastly', 'Meanwhile', 'Now', 'Once', 'Still', 'Thereafter', 'To sum up',
  'Until', 'Whereas', 'Which', 'Why', 'Yet'
];

const determiners = [
  'A', 'An', 'Her', 'His', 'Its', 'My', 'Our', 'That', 'The', 'Their', 'These', 'This', 'Those', 'Whose', 'Your'
];

const exclamations = [
  'Ah', 'Bingo', 'Bravo', 'Bye', 'Cheers', 'Duck', 'Excellent', 'Freeze', 'Goodbye',
  'Great', 'Heavens', 'Help', 'Hooray', 'Huh', 'Man', 'Oh', 'Please', 'Yippee'
];

const nouns = [
  'Actor', 'Animal', 'Answer', 'Brother', 'Church', 'Dream', 'Furniture', 
  'Hospital', 'Ice', 'King', 'Morning', 'Night', 'Piano', 'Pizza', 'Queen',
  'River', 'Soccer', 'Stone', 'Teacher', 'Vegetable', 'Wire'
];

const prepositions = [
  'Aboard', 'Against', 'Before', 'Besides', 'Concerning', 'During', 'Inside',
  'Near', 'Opposite', 'Over', 'Regarding', 'Since', 'Towards', 'Underneath', 'Without'
];

const pronouns = [
  'Anybody', 'Everything', 'Herself', 'Mine', 'Nobody', 'Others', 'Something',
  'Theirs', 'Themselves', 'Whatever', 'Wherein', 'Whichever', 'Yours'
];

const verbs = [
  'Accept', 'Adjust', 'Agree', 'Bake', 'Blow', 'Buy', 'Change', 'Cry',
  'Delay', 'Desire', 'Dream', 'Earn', 'Enjoy', 'Fly', 'Forgive', 'Go',
  'Hate', 'Hold', 'Jump', 'Kick', 'Leave', 'Manage', 'Open', 'Play'
];

const mapTypeWords = (typeId, list) => {
  const date = new Date();
  return list.map(word => ({ word, typeId, createdAt: date, updatedAt: date }));
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const words = [
      ...mapTypeWords(1, adjectives),
      ...mapTypeWords(2, adverbs),
      ...mapTypeWords(3, conjunctions),
      ...mapTypeWords(4, determiners),
      ...mapTypeWords(5, exclamations),
      ...mapTypeWords(6, nouns),
      ...mapTypeWords(7, prepositions),
      ...mapTypeWords(8, pronouns),
      ...mapTypeWords(9, verbs)
    ];

    await queryInterface.bulkInsert('words', words, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('words', null, {});
  }
};
