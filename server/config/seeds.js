const db = require('./connection');
const { User, Car, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'SUV' },
    { name: 'Truck' },
    { name: 'Sedan' },
    { name: 'Coupe' },
    { name: 'Minivan' }
  ]);

  console.log('categories seeded');

  await Car.deleteMany();

  const cars = await Car.insertMany([
    {
      model: 'Genesis',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-d.jpeg',
      cardId: '1',
      price: 62000,
      year: 2022
    },
    {
      model: 'Mercedes',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-b.jpeg',
      cardId: '2',
      price: 75000,
      year: 2021
    },
    {
      model: 'BMW',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-f.jpeg',
      cardId: '3',
      price: 65000,
      year: 2022
    }
  ]);


  console.log('Cars seeded');

  await User.deleteMany();

  await User.create({
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        cars: [cars[0]._id, cars[0]._id, cars[1]._id]
      }
    ]
  });

  await User.create({
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
