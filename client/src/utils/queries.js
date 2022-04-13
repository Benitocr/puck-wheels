import { gql } from '@apollo/client';

export const QUERY_CARS = gql`
  query getCars($category: ID) {
    cars(category: $category) {
      _id
      model
      description
      image
      price
      year
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_CARS = gql`
  {
    cars {
      _id
      model
      description
      image
      price
      year
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      email
      carCount
        wishList {
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
  }
`;