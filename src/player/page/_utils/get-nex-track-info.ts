import {TrackListItemType} from "../../redux/player/types";

type ParamsType = {
  trackList: Array<TrackListItemType>;
  tracksCount: number;
  trackIndex: number;
};

type ResultType = {
  index: number;
} & TrackListItemType;

export const getNextTrackInfo = ({
  trackList,
  tracksCount,
  trackIndex,
}: ParamsType): ResultType => {
  const index = trackIndex < tracksCount ? trackIndex + 1 : 0;
  const {name, id, size, extension, url} = trackList[index];

  return {
    name,
    id,
    size,
    extension,
    url,
    index,
  };
};
