export type TrackListItemType = {
  name: string;
  id: number;
  size: number;
  extension: string;
  url: string;
};

export type TrackListStorageType = {
  player: HTMLAudioElement;
  trackList: Array<TrackListItemType>;
  trackName: string;
  trackIndex: number;
  cover: string;
  isLoading: boolean;
};

export type TrackListActionType = {
  type: string;
  payload?: Array<TrackListItemType> | string | number | HTMLAudioElement;
};
