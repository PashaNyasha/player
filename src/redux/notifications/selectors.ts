import {createSelector} from "reselect";
import {ReduxStorageType} from "../../types/redux-storage-type";
import {initialState, NOTIFICATIONS_REDUCER_NAME} from "./redux";
import {NotificationStorageType} from "./types";

export const getNotificationsStorageSelector = (store: ReduxStorageType) =>
  store[NOTIFICATIONS_REDUCER_NAME] || initialState;

export const getNotificationTextSelector = createSelector(
  [getNotificationsStorageSelector],
  ({text}: NotificationStorageType) => text
);

export const getNotificationTimeoutSelector = createSelector(
  [getNotificationsStorageSelector],
  ({timeout}: NotificationStorageType) => timeout
);

export const isShowNotificationSelector = createSelector(
  [getNotificationsStorageSelector],
  ({isShow}: NotificationStorageType) => isShow
);
