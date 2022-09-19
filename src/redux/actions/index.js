export const GET_JOBS = "GET_JOBS"
export const SET_QUERY = "SET_QUERY"
export const SET_COMPANY_JOB = "SET_COMPANY_JOB"
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?"

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        baseEndpoint + "search=" + query + "&limit=20"
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data,
        })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const setQueryAction = (query) => ({
  type: SET_QUERY,
  payload: query,
})

export const getCompanyJobs = (companyName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + "company=" + companyName)
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: SET_COMPANY_JOB,
          payload: data,
        })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const addToFavorites = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
})

export const removeFromFavorites = (job) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: job,
})
