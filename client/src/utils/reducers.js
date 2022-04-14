import { useReducer } from "react";
import {
  UPDATE_CARS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,  
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CARS:
      return {
        ...state,
        cars: [...action.cars],
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.car],
      };
    case REMOVE_FROM_WISHLIST:
      let newState = state.wishList.filter(car => {
        return car._id !== action.carId;
      });
      return {
        ...state,
          wishList: newState
      };
    case CLEAR_WISHLIST:
      return {
        ...state,
        wishList: [],
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [action.categories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}