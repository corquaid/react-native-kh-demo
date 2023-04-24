import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Product } from '../types'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

interface FavouritesState {
  favourites: number[]
}

const initialState: FavouritesState = {
  favourites: [],
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
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

const favouritesReducer = favouritesSlice.reducer

export const rootReducer = combineReducers({
  favourites: favouritesReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
