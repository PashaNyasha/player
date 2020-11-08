export type PlayListType = Array<string>;

export type PlayListStorageType = {
  playlist: PlayListType;
  isLoading: boolean;
};

export type PlayListActionType = {
  type: string;
  payload?: PlayListType;
};
