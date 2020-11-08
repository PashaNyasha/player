import {PLAY_LIST_REDUCER_NAME} from "../player/redux/player/reducer";
import {PlayListStorageType} from "../player/redux/player/types";

export type ReduxStorageType = {
  [PLAY_LIST_REDUCER_NAME]: PlayListStorageType;
};
