import { ADD_FAVORITES, DELETE_FAVORITES, SET_ERROR_MAIN } from "../actions"
import { initialState } from "../store"

export default function favoritesReducer(
  state = initialState.favorites,
  action
) {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      }
    case DELETE_FAVORITES:
      return {
        ...state,

        jobs: state.jobs.filter((job) => job._id !== action.payload._id),
      }

    default:
      return state
  }
}
