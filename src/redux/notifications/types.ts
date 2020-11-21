export type NotificationStorageType = {
  isShow: boolean;
  text: string;
  timeout: number;
};

export type SetNotificationType = {
  text: string;
  timeout?: number;
};

export type NotificationsActionTypes = {
  type: string;
  payload?: SetNotificationType;
};
