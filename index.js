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
    model: 'Galaxy S10',
    manufactureDate: '2020-05-12',
    ram: 8,
    cpu: 'Cortexx2',
    screen: 5.9,
    nfc: false,
  };

  //   программно добавление нового телефона,---------------------------done--*

  // const createdPhone = await Phone.create(phone);
  // console.log('createdPhone', createdPhone);

  //   получение списка телефонов (* 3-я страница при просмотре
  //   по 4 телефона на странице, упорядоченных по году издания)---------done---

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   limit: 4,
  //   offset: 8,
  //   order: [['manufactureDate', 'ASC']],
  // });
  // console.log('foundPhones', foundPhones);

  //   *получение списка телефонов определенного года издания,------done--------*

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { manufactureDate: '2017-03-21' },
  // });
  // console.log('foundPhones', foundPhones);

  //   *получение списка телефонов старее 2020 года выпуска,--------done--------*

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { manufactureDate: { [Op.gt]: '2020-12-31' } },
  // });
  // console.log('foundPhones', foundPhones);

  //   обновление: добавить нфс всем телефонам 2020 года выпуска,-----done-----*

  // const updatedPhone = await Phone.update(
  //   { nfc: false },
  //   {
  //     where: {
  //       manufactureDate: { [Op.between]: ['2020-01-01', '2020-12-31'] },
  //     },
  //   }
  // );
  // console.log('updatePhone', updatedPhone);

  //   удаление телефонов 2010 года выпуска.---------done-------*

  // const deletedPhone = await Phone.destroy({
  //   where: {
  //     manufactureDate: { [Op.between]: ['2020-01-01', '2020-12-31'] },
  //   },
  // });
  // console.log('deletedPhone', deletedPhone);
})();
