export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const SET_JOBS = "SET_JOBS"
export const SET_MAIN_JOBS = "SET_MAIN_JOBS"
export const SET_QUERY = "SET_QUERY"

// the action is a triger it defines --- an action is an intent
export const addFavorites = (jobs) => ({
  type: ADD_FAVORITES,
  payload: jobs,
})

export const removeFavorites = (jobs) => ({
  type: DELETE_FAVORITES,
  payload: jobs,
})

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
})

export const setMainJobs = (jobs) => ({
  type: SET_MAIN_JOBS,
  payload: jobs,
})

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
})
