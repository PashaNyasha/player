export type PlayListItemType = {
  name: string;
  id: number;
  size: number;
  extension: string;
  url: string;
};

export type PlayListStorageType = {
  playlist: Array<PlayListItemType>;
  cover: string;
  isLoading: boolean;
};

export type PlayListActionType = {
  type: string;
  payload?: Array<PlayListItemType> | string;
};
