import React, {memo, useCallback, useState} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {Track} from "../../../_components/player-controls/_components/track";
import {HandlePlayType} from "../../_types";
import {TrackListItemType} from "../../../redux/player/types";
import {MusicIcon} from "./_components/music-icon";
import {CloseIcon} from "./_components/close-icon";

const CLASS_NAME = "Track-list";
const cn = classnames.bind(styles);

type PropsType = {
  trackList: Array<TrackListItemType>;
  trackIndex: number;
  onPlayTrack: (params: HandlePlayType) => void;
  onSetIsListVisible?: (isVisible: boolean) => void;
};

export const TrackList = memo(
  ({trackList, trackIndex, onPlayTrack}: PropsType) => {
    const [isListVisible, setIsListVisible] = useState<boolean>(false);

    const handleToggle = useCallback(() => setIsListVisible(!isListVisible), [
      isListVisible,
    ]);

    return (
      <div className={cn(CLASS_NAME)}>
        <button
          className={cn(`${CLASS_NAME}__toggle-button`, {
            [`${CLASS_NAME}__toggle-button--is-toggle`]: isListVisible,
          })}
          onClick={handleToggle}
        >
          {isListVisible ? <CloseIcon /> : <MusicIcon />}
        </button>

        <div
          className={cn(`${CLASS_NAME}__tracks`, {
            [`${CLASS_NAME}__tracks--is-list-visible`]: isListVisible,
          })}
        >
          {trackList.map(({url, name}: TrackListItemType, index: number) => (
            <Track
              url={url}
              name={name}
              onPlayMusic={onPlayTrack}
              key={name}
              index={index}
              currentIndex={trackIndex}
            />
          ))}
        </div>
      </div>
    );
  }
);
