'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Phones',
      [
        {
          brand: 'Apple',
          model: 'Iphone X',
          manufacture_date: '2019-09-14',
          ram: 4,
          cpu: 'Bionic A14',
          screen: 6.1,
          nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          brand: 'Lenovo',
          model: 'K20',
          manufacture_date: '2017-03-21',
          ram: 2,
          cpu: 'intel core 2',
          screen: 4.9,
          nfc: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          brand: 'Samsung',
          model: 'A53',
          manufacture_date: '2022-05-20',
          ram: 6,
          cpu: 'Dragon 760',
          screen: 6,
          nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phones', null, {});
  },
};
