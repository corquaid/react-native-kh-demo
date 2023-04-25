import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
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
import favouritesSlice from './favouritesSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

export const rootReducer = combineReducers({
  favourites: favouritesSlice,
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

