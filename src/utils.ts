import { Product } from './types'

/** Capitalizes first letters of all words in a given string */
export const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/** Checks if item has been added to Favourites */
export const checkFavourite = (favourites: Product[], product: Product) => {
  return favourites.some((favourite) => favourite.id === product.id)
}
