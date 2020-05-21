import {films} from "./mocks/films";

export const initialState = {
  genre: "All genres",
  currentFilm: films[0],
  isPlaying: false,
  films
};
