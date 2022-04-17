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
 query cars($category: ID, $year: Int) {
    cars(category: $category, year: $year) {
      _id
      model
      description
      image
      price
      year
 
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