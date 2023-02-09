import { createSlice } from "@reduxjs/toolkit"

const initialState = { jobs: [] }

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.jobs.push(action.payload)
    },
    deleteFavorites: (state, action) => {
      state.jobs = state.jobs.filter((job) => job._id !== action.payload._id)
    },
  },
})

export const { addFavorite, deleteFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
