import { GET_JOBS, SET_QUERY } from "../actions"
import { initialState } from "../store"

const mainReducer = (state = initialState.main, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,

        jobs: action.payload,
      }

    case SET_QUERY:
      return {
        ...state,

        query: action.payload,
      }

    default:
      return state
  }
}

export default mainReducer
