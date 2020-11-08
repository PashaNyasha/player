import {PLAY_LIST_REDUCER_NAME} from "../player/redux/playlist/reducer";
import {PlayListStorageType} from "../player/redux/playlist/types";

export type ReduxStorageType = {
  [PLAY_LIST_REDUCER_NAME]: PlayListStorageType;
};
