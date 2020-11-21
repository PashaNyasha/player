import React, {memo, useCallback, useState} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {Track} from "../../../_components/player-controls/_components/track";
import {HandlePlayType} from "../../_types";
import {TrackListItemType} from "../../../redux/player/types";

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

    const handleGiveVisible = useCallback(() => setIsListVisible(true), []);
    const handleBlockVisible = useCallback(() => setIsListVisible(false), []);

    return (
      <div className={cn(CLASS_NAME)}>
        {isListVisible ? (
          <div className={cn(`${CLASS_NAME}__tracks`)}>
            <button
              onClick={handleBlockVisible}
              className={cn(`${CLASS_NAME}__close-button`)}
            >
              close
            </button>
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
        ) : (
          <button
            onClick={handleGiveVisible}
            className={cn(`${CLASS_NAME}__open-button`)}
          >
            open
          </button>
        )}
      </div>
    );
  }
);
