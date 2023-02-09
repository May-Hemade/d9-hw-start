import { configureStore } from "@reduxjs/toolkit"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import favoritesSlice from "../reducers/favoritesSlice"

import { combineReducers } from "redux"

import { encryptTransform } from "redux-persist-transform-encrypt"

import mainSlice from "../reducers/mainSlice"
import companySlice from "../reducers/companySlice"

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

const rootReducer = combineReducers({
  favorites: favoritesSlice,
  main: mainSlice,
  company: companySlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// I want to create the store

const store = configureStore({
  reducer: persistedReducer,
})

export let persistor = persistStore(store)

export default store
