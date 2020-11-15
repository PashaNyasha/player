import {
  SET_BACKGROUND_ACTION,
  SET_COVER_ACTION,
  SET_PLAYER_ACTION,
  SET_TRACK_INDEX_ACTION,
  SET_TRACK_LIST_ACTION,
  SET_TRACK_NAME_ACTION,
  START_LOADING_TRACK_LIST_ACTION,
  STOP_LOADING_TRACK_LIST_ACTION,
} from "./actions";
import {TrackListActionType, TrackListStorageType} from "./types";

export const initialState: TrackListStorageType = {
  trackList: [
    {
      url: "",
      name: "",
      size: 0,
      extension: "",
      id: 0,
    },
  ],
  trackName: "",
  trackIndex: 0,
  player: new Audio(),
  cover: "",
  background: "",
  isLoading: false,
};

export const TRACK_LIST_REDUCER_NAME = "TRACK_LIST_REDUCER_NAME";

const reducer = (
  state: TrackListStorageType = initialState,
  {type, payload}: TrackListActionType
) => {
  switch (type) {
    case SET_TRACK_LIST_ACTION:
      return {...state, trackList: payload};

    case SET_TRACK_NAME_ACTION:
      return {...state, trackName: payload};

    case SET_TRACK_INDEX_ACTION:
      return {...state, trackIndex: payload};

    case SET_PLAYER_ACTION:
      return {...state, player: payload};

    case SET_COVER_ACTION:
      return {...state, cover: payload};

    case SET_BACKGROUND_ACTION:
      return {...state, background: payload};

    case START_LOADING_TRACK_LIST_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_TRACK_LIST_ACTION:
      return {...state, isLoading: false};

    default:
      return state;
  }
};

export default reducer;
