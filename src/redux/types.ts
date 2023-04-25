import { rootReducer } from "./store"

export interface AppState {
  favourites: number[]
}

export type RootState = ReturnType<typeof rootReducer>
