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
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-f.png",
      // cardId: '1',
      price: 72000,
      year: 2021,
      horsepower: 355,
      fuelConsumption: "20/22"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-e.png",
      // cardId: '1',
      price: 66000,
      year: 2021,
      horsepower: 400,
      fuelConsumption: "26/28"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-d.png",
      // cardId: '1',
      price: 66000,
      year: 2021,
      horsepower: 341,
      fuelConsumption: "28/32"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-c.png",
      // cardId: '1',
      price: 66000,
      year: 2021,
      horsepower: 420,
      fuelConsumption: "15/20"
    },

    {
      model: "Mercedez Benz",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-a.png",
      // cardId: '1',
      price: 69000,
      year: 2021,
      horsepower: 325,
      fuelConsumption: "20/22"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-f.png",
      // cardId: '1',
      price: 69000,
      year: 2021,
      horsepower: 415,
      fuelConsumption: "21/25"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-e.png",
      // cardId: '1',
      price: 67000,
      year: 2021,
      horsepower: 305,
      fuelConsumption: "27/30"
    },
    {
      model: "Mercedez Benz",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-d.png",
      // cardId: '1',
      price: 77000,
      year: 2021,
      horsepower: 335,
      fuelConsumption: "20/22"
    },
    {
      model: "Mercedez Benz",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-c.png",
      // cardId: '1',
      price: 77000,
      year: 2021,
      horsepower: 320,
      fuelConsumption: "21/29"
    },
    {
      model: "Mercedez Benz",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-b.png",
      // cardId: '1',
      price: 68000,
      year: 2021,
      horsepower: 450,
      fuelConsumption: "17/22"
    },
    {
      model: "Mercedez Benz",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "2-a.png",
      // cardId: '1',
      price: 65000,
      year: 2021,
      horsepower: 290,
      fuelConsumption: "30/35"
    },
    {
      model: "Rolls Royce",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-a.png",
      // cardId: '1',
      price: 79000,
      year: 2021,
      horsepower: 360,
      fuelConsumption: "25/28"
    },
    {
      model: "Lamborghini",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-f.png",
      // cardId: '1',
      price: 102000,
      year: 2021,
      horsepower:455,
      fuelConsumption: "17/26"
    },
    {
      model: "BMW",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-e.png",
      // cardId: '1',
      price: 65000,
      year: 2021,
      horsepower: 425,
      fuelConsumption: "20/28"
    },
    {
      model: "Rolls Royce",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-d.png",
      // cardId: '1',
      price: 75000,
      year: 2022,
      horsepower: 375,
      fuelConsumption: "19/23"
    },
    {
      model: "Rolls Royce",
      category: categories[2]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-c.png",
      // cardId: '1',
      price: 80000,
      year: 2022,
      horsepower: 450,
      fuelConsumption: "20/28"
    },
    {
      model: "Rolls Royce",
      category: categories[3]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-d.png",
      // cardId: '1',
      price: 82000,
      year: 2023,
      horsepower: 435,
      fuelConsumption: "18/22"
    },
    {
      model: "Rolls Royce",
      category: categories[0]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "1-b.png",
      // cardId: '1',
      price: 92000,
      year: 2023,
      horsepower: 405,
      fuelConsumption: "26/30"
    },
    {
      model: "Mercedes",
      category: categories[0]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-b.png",
      // cardId: '2',
      price: 75000,
      year: 2021,
      horsepower: 460,
      fuelConsumption: "15/22"
    },
    {
      model: "BMW",
      category: categories[0]._id,
      description:
        "The work-ready landscape dump was throttled by the Nissan. The 4WD, shock-resistant motor vehicle demolished while once the hand truck fixed the semi. The tough, aluminum step van braked but the automobile constructed the aluminum garbage truck. The ute trucked the durable driver. The durable tow hook was decelerated by the van. The platform body developed the tough combo body.",
      image: "3-f.png",
      // cardId: '3',
      price: 65000,
      year: 2023,
      horsepower: 365,
      fuelConsumption: "23/32"
    },
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
