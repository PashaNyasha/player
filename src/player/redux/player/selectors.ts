import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../types/redux-storage-type";
import {initialState, PLAY_LIST_REDUCER_NAME} from "./reducer";
import {PlayListStorageType} from "./types";

export const playListStorageSelector = (store: ReduxStorageType) =>
  store[PLAY_LIST_REDUCER_NAME] || initialState;

export const getPlayListSelector = createSelector(
  [playListStorageSelector],
  ({playlist}: PlayListStorageType) => playlist
);

export const isPlaylistLoadingSelector = createSelector(
    [playListStorageSelector],
    ({isLoading}: PlayListStorageType) => isLoading
  );