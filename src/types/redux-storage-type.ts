import {TRACK_LIST_REDUCER_NAME} from "../player/redux/player/reducer";
import {TrackListStorageType} from "../player/redux/player/types";

export type ReduxStorageType = {
  [TRACK_LIST_REDUCER_NAME]: TrackListStorageType;
};
