import {CHANGE_GENRE, SET_IS_PLAYING} from "../constants";

export const ActionCreator = {
  setGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre
  }),

  setIsPlaying: () => ({
    type: SET_IS_PLAYING,
  })
};
