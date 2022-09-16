import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../reducers"

export const initialState = {
  main: {
    query: "",
    jobs: [],
  },
  company: {
    jobs: [],
  },

  favorites: {
    jobs: [],
  },
}

const store = configureStore({
  reducer: mainReducer,
})

export default store
