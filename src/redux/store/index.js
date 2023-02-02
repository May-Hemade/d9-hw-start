import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"
// import { mainReducer } from "../reducers/main"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"

import favoritesReducer from "../reducers/favoritesReducer"
import { mainReducer } from "../reducers/mainReducer"
import { searchReducer } from "../reducers/searchReducer"

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
    error: false,
    load: false,
  },
}

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
  main: mainReducer,
})

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
      onError: function (error) {
        console.log(error)
      },
    }),
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// I want to create the store

const store = configureStore({
  reducer: persistedReducer,
})

export let persistor = persistStore(store)

export default store
