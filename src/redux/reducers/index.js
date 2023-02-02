import { combineReducers, createStore } from "redux"
import favoriteReducer from "../reducers/favoritesSlice"
import { mainReducer } from "./main"

export const rootReducer = combineReducers({
  favoriteReducer,
  mainReducer,
})
