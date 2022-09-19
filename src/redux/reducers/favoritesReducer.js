import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions"
import { initialState } from "../store"

const favoritesRseducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        jobs: [...state.jobs, action.payload],
      }

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,

        jobs: state.jobs.filter((job) => job._id !== action.payload._id),
      }

    default:
      return state
  }
}

export default favoritesRseducer
