import { SET_ERROR_SEARCH, SET_JOBS, SET_LOAD_MAIN } from "../actions"
import { initialState } from "../store"

export const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: [...action.payload],
      }

    case SET_LOAD_MAIN:
      return {
        ...state,
        load: action.payload,
      }
    case SET_ERROR_SEARCH:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
