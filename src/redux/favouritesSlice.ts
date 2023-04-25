import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types'
import { AppState } from './types'

const appInitialState: AppState = {
  favourites: [],
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: appInitialState,
  reducers: {
    addFavourite(state, action: PayloadAction<Product>) {
      const product = action.payload
      state.favourites.push(product.id)
    },
    removeFavourite(state, action: PayloadAction<number>) {
      const productId = action.payload
      state.favourites = state.favourites.filter(
        (favourite) => favourite !== productId,
      )
    },
  },
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer