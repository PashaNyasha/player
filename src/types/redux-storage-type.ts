import {TRACK_LIST_REDUCER_NAME} from "../player/redux/player/reducer";
import {TrackListStorageType} from "../player/redux/player/types";
import { NotificationStorageType } from "../redux/notifications";
import { NOTIFICATIONS_REDUCER_NAME } from "../redux/notifications/redux";

export type ReduxStorageType = {
  [TRACK_LIST_REDUCER_NAME]: TrackListStorageType;
  [NOTIFICATIONS_REDUCER_NAME]: NotificationStorageType;
};
