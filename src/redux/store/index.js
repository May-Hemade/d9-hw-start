import { combineReducers, configureStore } from "@reduxjs/toolkit"
import companyReducer from "../reducers/companyReducer"
import favoritesRseducer from "../reducers/favoritesReducer"
import mainReducer from "../reducers/mainReducer"

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

const bigReducer = combineReducers({
  main: mainReducer,
  favorites: favoritesRseducer,
  company: companyReducer,
})
const store = configureStore({
  reducer: bigReducer,
})

export default store
