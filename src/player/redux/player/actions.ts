import {TrackListItemType} from "./types";

export const SET_TRACK_LIST_ACTION = "SET_TRACK_LIST_ACTION";
export const setTracklistAction = (payload: Array<TrackListItemType>) => ({
  type: SET_TRACK_LIST_ACTION,
  payload,
});

export const SET_COVER_ACTION = "SET_COVER_ACTION";
export const setCoverAction = (payload: string) => ({
  type: SET_COVER_ACTION,
  payload,
});

export const SET_TRACK_NAME_ACTION = "SET_TRACK_NAME_ACTION";
export const setTrackNameAction = (payload: string) => ({
  type: SET_TRACK_NAME_ACTION,
  payload,
});

export const SET_TRACK_INDEX_ACTION = "SET_TRACK_INDEX_ACTION";
export const setTrackIndexAction = (payload: number) => ({
  type: SET_TRACK_INDEX_ACTION,
  payload,
});

export const SET_PLAYER_ACTION = "SET_PLAYER_ACTION";
export const setPlayerAction = (payload: HTMLAudioElement) => ({
  type: SET_PLAYER_ACTION,
  payload,
});

export const START_LOADING_TRACK_LIST_ACTION = "START_LOADING_TRACK_LIST_ACTION";
export const startLoadingTrackListAction = () => ({
  type: START_LOADING_TRACK_LIST_ACTION,
});

export const STOP_LOADING_TRACK_LIST_ACTION = "STOP_LOADING_TRACK_LIST_ACTION";
export const stopLoadingTrackListAction = () => ({
  type: STOP_LOADING_TRACK_LIST_ACTION,
});

export const GET_TRACK_LIST_ACTION_SAGA = "GET_TRACK_LIST_ACTION_SAGA";
export const getTrackListActionSaga = () => ({
  type: GET_TRACK_LIST_ACTION_SAGA,
});
