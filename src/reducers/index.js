import {CHANGE_GENRE} from "../constants";
import {films} from "../mocks/films";

const initialState = {
  genre: "All genres",
  films
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
  }
  return state;
};
