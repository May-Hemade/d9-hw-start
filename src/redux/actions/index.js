export const GET_JOBS = "GET_JOBS"
export const SET_QUERY = "SET_QUERY"
export const SET_COMPANY_JOB = "SET_COMPANY_JOB"
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export const getJobsAction = (jobs) => ({
  type: GET_JOBS,
  payload: jobs,
})

export const setQueryAction = (query) => ({
  type: SET_QUERY,
  payload: query,
})

export const setCompanyJobAction = (jobs) => ({
  type: SET_COMPANY_JOB,
  payload: jobs,
})

export const addToFavorites = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
})

export const removeFromFavorites = (job) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: job,
})
