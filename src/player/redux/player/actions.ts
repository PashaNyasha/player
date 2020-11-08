import {PlayListItemType} from "./types";

export const SET_PLAYLIST_ACTION = "SET_PLAYLIST_ACTION";
export const setPlaylistAction = (payload: Array<PlayListItemType>) => ({
  type: SET_PLAYLIST_ACTION,
  payload,
});

export const SET_COVER_ACTION = "SET_COVER_ACTION";
export const setCoverAction = (payload: string) => ({
  type: SET_COVER_ACTION,
  payload,
});

export const START_LOADING_PLAYLIST_ACTION = "START_LOADING_PLAYLIST_ACTION";
export const startLoadingPlayListAction = () => ({
  type: START_LOADING_PLAYLIST_ACTION,
});

export const STOP_LOADING_PLAYLIST_ACTION = "STOP_LOADING_PLAYLIST_ACTION";
export const stopLoadingPlayListAction = () => ({
  type: STOP_LOADING_PLAYLIST_ACTION,
});

export const GET_MUSIC_ACTION_SAGA = "GET_MUSIC_ACTION_SAGA";
export const getMusicActionSaga = () => ({
  type: GET_MUSIC_ACTION_SAGA,
});
