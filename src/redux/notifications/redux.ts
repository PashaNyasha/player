import {SHOW_NOTIFICATION_ACTION, HIDE_NOTIFICATION_ACTION} from "./actions";
import {NotificationsActionTypes, NotificationStorageType} from "./types";

export const NOTIFICATIONS_REDUCER_NAME = "NOTIFICATIONS_REDUCER_NAME";

export const initialState: NotificationStorageType = {
  isShow: false,
  text: "",
  timeout: 5000,
};

const reducer = (
  state: NotificationStorageType = initialState,
  {type, payload}: NotificationsActionTypes
) => {
  switch (type) {
    case SHOW_NOTIFICATION_ACTION:
      return {
        ...state,
        isShow: true,
        text: payload!.text,
        timeout: payload!.timeout || initialState.timeout,
      };

    case HIDE_NOTIFICATION_ACTION:
      return {...state, isShow: false};

    default:
      return state;
  }
};

export default reducer;
