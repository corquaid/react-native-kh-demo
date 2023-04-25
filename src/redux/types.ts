import { Product } from "../types"
import { rootReducer } from "./store"

export interface AppState {
  favourites: Product[]
}

export type RootState = ReturnType<typeof rootReducer>
