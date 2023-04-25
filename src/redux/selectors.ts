import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './types';

export const selectFavourites = createSelector(
  (state: RootState) => state.favourites,
  (favourites) => favourites.favourites
);
