import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const searchJobs = createAsyncThunk(
  "main/searchJobs",
  async (arg, { getState, rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoadMain(true))
      dispatch(setErrorMain(false))
      const query = getState().main.query
      let response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        let data = await response.json()

        return data.data
      } else {
        return rejectWithValue("error happened fetching ")
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  query: "",
  jobs: [],
  error: false,
  load: false,
}

// how I want to do it what actions I want to do on the store applying the action
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setErrorMain: (state, action) => {
      state.error = action.payload
    },
    setLoadMain: (state, action) => {
      state.load = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(searchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
      state.error = false
      state.load = false
    })
  },
})

export const { setQuery, setMainJob, setErrorMain, setLoadMain } =
  mainSlice.actions

export default mainSlice.reducer
