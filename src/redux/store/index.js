import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "../reducers/main"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

export const initialState = {
  search: {
    jobs: [],
  },
  favorites: {
    jobs: [],
  },
  main: {
    query: "",
    jobs: [],
  },
}

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

// I want to create the store

const store = configureStore({
  reducer: persistedReducer,
})

export let persistor = persistStore(store)

export default store