import {
  ADD_TO_FAVORITES,
  GET_JOBS,
  REMOVE_FROM_FAVORITES,
  SET_COMPANY_JOB,
  SET_QUERY,
} from "../actions"
import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        main: {
          ...state.main,
          jobs: action.payload,
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

    case SET_COMPANY_JOB:
      return {
        ...state,
        company: {
          ...state.company,
          jobs: action.payload,
        },
      }
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: [...state.favorites.jobs, action.payload],
        },
      }

    case REMOVE_FROM_FAVORITES:
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

export default mainReducer
