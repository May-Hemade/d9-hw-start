import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  SET_JOBS,
  SET_MAIN_JOBS,
  SET_QUERY,
} from "../actions"
import { initialState } from "../store"

// how I want to do it what actions I want to do on the store applying the action
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        search: {
          ...state.search,
          jobs: [...action.payload],
        },
      }
    case SET_QUERY:
      return {
        ...state,
        main: {
          ...state.main,
          query: action.payload,
        },
      }
    case SET_MAIN_JOBS:
      return {
        ...state,
        main: {
          ...state.main,
          jobs: [...action.payload],
        },
      }
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
