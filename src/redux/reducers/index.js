import { combineReducers, createStore } from "redux"
import favoirtesReducer from "../reducers/favorites"
import { mainReducer } from "./main"

const rootReducer = combineReducers({
  favoirtesReducer,
  mainReducer,
})
