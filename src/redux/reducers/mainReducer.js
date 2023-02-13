import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  SET_ERROR_MAIN,
  SET_JOBS,
  SET_LOAD_MAIN,
  SET_MAIN_JOBS,
  SET_QUERY,
} from "../actions"
import { initialState } from "../store"

// how I want to do it what actions I want to do on the store applying the action
export const mainReducer = (state = initialState.main, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      }
    case SET_MAIN_JOBS:
      return {
        ...state,

        jobs: [...action.payload],
      }

    case SET_ERROR_MAIN:
      return {
        ...state,
        error: action.payload,
      }
    case SET_LOAD_MAIN:
      console.log("laod")
      return {
        ...state,
        load: action.payload,
      }
    default:
      return state
  }
}
