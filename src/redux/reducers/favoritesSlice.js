import { createSlice } from "@reduxjs/toolkit"

const initialState = { jobs: [] }

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state) => {
      state.jobs.push(action.payload)
    },
    deleteFavorites: (state) => {
      state.jobs = state.jobs.filter((job) => job._id !== action.payload._id)
    },
  },
})

export const { addFavorite, deleteFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer

//   switch (action.type) {
//     case ADD_FAVORITES:
//       return {
//         ...state,
//         favorites: {
//           ...state.favorites,
//           jobs: [...state.favorites.jobs, action.payload],
//         },
//       }
//     case DELETE_FAVORITES:
//       return {
//         ...state,
//         favorites: {
//           ...state.favorites,
//           jobs: state.favorites.jobs.filter(
//             (job) => job._id !== action.payload._id
//           ),
//         },
//       }
//     default:
//       return state
//   }
// }
