import { SET_COMPANY_JOB } from "../actions"
import { initialState } from "../store"

const companyReducer = (state = initialState.company, action) => {
  switch (action.type) {
    case SET_COMPANY_JOB:
      return {
        ...state,

        jobs: action.payload,
      }

    default:
      return state
  }
}

export default companyReducer
