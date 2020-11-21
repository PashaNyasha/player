import { SetNotificationType } from "./types";

export const SHOW_NOTIFICATION_ACTION = 'SHOW_NOTIFICATION_ACTION';
export const showNotificationAction = (payload: SetNotificationType) => ({
    type: SHOW_NOTIFICATION_ACTION,
    payload,
});

export const HIDE_NOTIFICATION_ACTION = 'HIDE_NOTIFICATION_ACTION';
export const hideNotificationAction = () => ({
    type: HIDE_NOTIFICATION_ACTION,
});