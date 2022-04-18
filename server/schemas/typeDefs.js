const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
            _id: ID
            email: String
            wishList: [WishList]
    }
    
    type Car {
        model: String
        description: String
        image: String
        _id: ID
        price: Float
        year: Int
        quantity: Int
        horsepower: Int
        fuelConsumption: String
        category: [Category]
    }

    type Category {
        _id: ID
        name: String
        
    }

    type WishList {
        _id: ID
        purchaseDate: String
        cars: [Car]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        categories: [Category]
        cars(category: ID, year: Int): [Car]
        car(_id: ID!): Car
        user: User
        wishList(_id: ID!): WishList
        
      }

    type Mutation {
        login(email: String!, password: String!) : Auth
        addUser(email: String!, password: String!) : Auth
        addWishList(car: ID!): WishList
        updateCar(_id: ID!, quantity: Int!): Car
        removeCar(carId: String!) : Car
    }
    `;

    module.exports = typeDefs;