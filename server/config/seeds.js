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
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-f.png',
      // cardId: '1',
      price: 72000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-e.png',
      // cardId: '1',
      price: 66000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-d.png',
      // cardId: '1',
      price: 66000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-c.png',
      // cardId: '1',
      price: 66000,
      year: 2021
    },
   
    {
      model: 'Mercedez Benz',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-a.png',
      // cardId: '1',
      price: 69000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-f.png',
      // cardId: '1',
      price: 69000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-e.png',
      // cardId: '1',
      price: 67000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-d.png',
      // cardId: '1',
      price: 77000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-c.png',
      // cardId: '1',
      price: 77000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-b.png',
      // cardId: '1',
      price: 68000,
      year: 2021
    },
    {
      model: 'Mercedez Benz',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '2-a.png',
      // cardId: '1',
      price: 65000,
      year: 2021
    },
    {
      model: 'Rolls Royce',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-a.png',
      // cardId: '1',
      price: 79000,
      year: 2021
    },
    {
      model: 'Lamborghini',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-f.png',
      // cardId: '1',
      price: 102000,
      year: 2021
    },
    {
      model: 'BMW',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-e.png',
      // cardId: '1',
      price: 65000,
      year: 2021
    },
    {
      model: 'Rolls Royce',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-d.png',
      // cardId: '1',
      price: 75000,
      year: 2022
    },
    {
      model: 'Rolls Royce',
      category: categories[2]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-c.png',
      // cardId: '1',
      price: 80000,
      year: 2022
    },
    {
      model: 'Rolls Royce',
      category: categories[3]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-d.png',
      // cardId: '1',
      price: 82000,
      year: 2023
    },
    {
      model: 'Rolls Royce',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1-b.png',
      // cardId: '1',
      price: 92000,
      year: 2023
    },
    {
      model: 'Mercedes',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-b.png',
      // cardId: '2',
      price: 75000,
      year: 2021
    },
    {
      model: 'BMW',
      category: categories[0]._id,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '3-f.png',
      // cardId: '3',
      price: 65000,
      year: 2023
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
