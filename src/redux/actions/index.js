export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const SET_JOBS = "SET_JOBS"
export const SET_MAIN_JOBS = "SET_MAIN_JOBS"
export const SET_QUERY = "SET_QUERY"
export const SET_ERROR_MAIN = "SET_ERROR_MAIN"
export const SET_LOAD_MAIN = "SET_LOAD_MAIN"

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

export const setErrorMain = (error) => ({
  type: SET_ERROR_MAIN,
  payload: error,
})

export const setLoadMain = (load) => ({
  type: SET_LOAD_MAIN,
  payload: load,
})

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const getJobs = (companyName) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        const response = await fetch(baseEndpoint + companyName)
        if (response.ok) {
          dispatch(setErrorMain(false))
          // dispatch(setLoadMain(false))
          const result = await response.json()

          console.log("search ok", result.data)
          dispatch(setJobs(result.data))
          console.log("iam the heloow", result.data)
        } else {
          // dispatch(setErrorMain(true))
          alert("Error fetching results")
        }
      } catch (error) {
        console.log(error)
      }
    }, 1000)
  }
}

export const searchJobs = () => {
  return (dispatch, getState) => {
    setTimeout(async () => {
      try {
        dispatch(setLoadMain(true))
        dispatch(setErrorMain(false))
        const query = getState().main.query
        const response = await fetch(baseEndpoint + query + "&limit=20")
        if (response.ok) {
          dispatch(setLoadMain(false))
          const { data } = await response.json()
          dispatch(setMainJobs(data))
        } else {
          dispatch(setErrorMain(true))
          alert("Error fetching results")
        }
      } catch (error) {
        dispatch(setErrorMain(true))
        console.log(error)
      }
    }, 1000)
  }
}
