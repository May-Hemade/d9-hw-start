import { SET_JOBS } from "../actions"
import { initialState } from "../store"

export const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: [...action.payload],
      }
    default:
      return state
  }
}
