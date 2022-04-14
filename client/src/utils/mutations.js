import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_WISH_LIST = gql`
  mutation addWishList($car: [ID]!) {
    addWishList(car: $car) {
      _id
      purchaseDate
      cars {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateCar($_id: ID!, $quantity: Int!) {
    updateCar(_id: $_id, quantity: $quantity) {
      _id
      model
      description
      image
      price
      year
      quantity
      category {
        _id
        name
      }
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation removeCar($carId: String!) {
    removeCar(carId: $carId) {
      _id
      model
      description
      image
      price
      year
      quantity
      category {
        _id
        name
      }
    }
  }
`;