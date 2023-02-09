import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { setErrorMain, setLoadMain } from "./mainSlice"

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const getCompanyJobs = createAsyncThunk(
  "company/getCompanyJobs",
  async (companyName, { dispatch }) => {
    try {
      const response = await fetch(baseEndpoint + companyName)
      if (response.ok) {
        dispatch(setErrorMain(false))
        dispatch(setLoadMain(false))
        const result = await response.json()
        return result.data
      } else {
        dispatch(setErrorMain(true))
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  jobs: [],
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanyJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
    })
  },
})

export const { setJobs } = companySlice.actions
export default companySlice.reducer
