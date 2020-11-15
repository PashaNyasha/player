import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../types/redux-storage-type";
import {initialState, TRACK_LIST_REDUCER_NAME} from "./reducer";
import {TrackListStorageType, TrackListItemType} from "./types";

export const trackListStorageSelector = (store: ReduxStorageType) =>
  store[TRACK_LIST_REDUCER_NAME] || initialState;

export const getTrackListSelector = createSelector(
  [trackListStorageSelector],
  ({trackList}: TrackListStorageType) => trackList
);

export const getTracksCountSelector = createSelector(
  [getTrackListSelector],
  (trackList: Array<TrackListItemType>) => trackList.length - 1
);

export const getFirstTrackSelector = createSelector(
  [getTrackListSelector],
  (trackList: Array<TrackListItemType>) => trackList[0],
);

export const getAlbumCoverSelector = createSelector(
  [trackListStorageSelector],
  ({cover}: TrackListStorageType) => cover
);

export const getTrackNameSelector = createSelector(
  [trackListStorageSelector],
  ({trackName}: TrackListStorageType) => trackName
);

export const getTrackIndexSelector = createSelector(
  [trackListStorageSelector],
  ({trackIndex}: TrackListStorageType) => trackIndex
);

export const getPlayerSelector = createSelector(
  [trackListStorageSelector],
  ({player}: TrackListStorageType) => player
);

export const isPlaylistLoadingSelector = createSelector(
  [trackListStorageSelector],
  ({isLoading}: TrackListStorageType) => isLoading
);
