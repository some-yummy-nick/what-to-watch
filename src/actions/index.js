import {CHANGE_GENRE} from "../constants";

export const ActionCreator = {
  setGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre
  })
};
