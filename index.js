const { Phone, sequelize, Sequelize } = require('./models');
const { Op } = require('sequelize');

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log('sync OK');
//   })
//   .catch(err => console.log('err', err));

(async () => {
  const phone = {
    brand: 'Samsung',
    model: 'Galaxy S8',
    manufactureDate: '2015-01-11',
    ram: 8,
    cpu: 'Cortexx2',
    screen: 5.9,
    nfc: true,
  };

  //   программно добавление нового телефона,------------------------*

  //   const createdPhone = await Phone.create(phone);
  //   console.log('createdPhone', createdPhone);

  //   получение списка телефонов (* 3-я страница при просмотре
  //   по 4 телефона на странице, упорядоченных по году издания)----------

  //   *получение списка телефонов определенного года издания,

  //   *получение списка телефонов старее 2020 года выпуска,

  //   обновление: добавить нфс всем телефонам 2021 года выпуска,

  //   удаление телефонов 2010 года выпуска.

  //
})();
