import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions"

export const favoirtesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: [...state.favorites.jobs, action.payload],
        },
      }
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: state.favorites.jobs.filter(
            (job) => job._id !== action.payload._id
          ),
        },
      }
    default:
      return state
  }
}
