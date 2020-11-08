import {PlayListType} from "./types";

export const SET_PLAYLIST_ACTION = "SET_PLAYLIST_ACTION";
export const setPlaylistAction = (payload: PlayListType) => ({
  type: SET_PLAYLIST_ACTION,
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
