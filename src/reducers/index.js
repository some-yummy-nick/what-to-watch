import {CHANGE_GENRE, SET_IS_PLAYING} from "../constants";
import {initialState} from "../state";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case SET_IS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: !state.isPlaying
      });
  }
  return state;
};
