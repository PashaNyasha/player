import {
  SET_PLAYLIST_ACTION,
  START_LOADING_PLAYLIST_ACTION,
  STOP_LOADING_PLAYLIST_ACTION,
} from "./actions";
import {PlayListActionType, PlayListStorageType} from "./types";

export const initialState: PlayListStorageType = {
  playlist: ["qwe2"],
  isLoading: false,
};

export const PLAY_LIST_REDUCER_NAME = "PLAY_LIST_REDUCER_NAME";

export const playlistReducer = (
  state: PlayListStorageType = initialState,
  {type, payload}: PlayListActionType
) => {
  switch (type) {
    case SET_PLAYLIST_ACTION:
      return {...state, playlist: payload};

    case START_LOADING_PLAYLIST_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_PLAYLIST_ACTION:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
