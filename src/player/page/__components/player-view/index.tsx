import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {PlayerControls} from "../../../_components/player-controls";
import {TrackList} from "../track-list";
import {TrackListItemType} from "../../../redux/player/types";
import {HandlePlayType} from "../../_types";

const CLASS_NAME = "Player-view";
const cn = classnames.bind(styles);

type PropsType = {
  trackName: string;
  cover: string;
  background: string;
  hasBackround: boolean;
  firstTrackOnLoad: TrackListItemType;
  trackIndex: number;
  trackList: Array<TrackListItemType>;
  onChangeTrack: () => void;
  onErrorLoadingBackgound: () => void;
  onSetPlayer: (player: HTMLAudioElement) => void;
  onPlayTrack: (params: HandlePlayType) => void;
  onShowNextTrack: () => void;
};

export const PlayerView = memo(
  ({
    trackName,
    cover,
    background,
    hasBackround,
    firstTrackOnLoad,
    trackIndex,
    trackList,
    onErrorLoadingBackgound,
    onChangeTrack,
    onSetPlayer,
    onPlayTrack,
    onShowNextTrack,
  }: PropsType) => {
      console.log(hasBackround)
    return (
      <div className={cn(CLASS_NAME)}>
        {hasBackround && (
          <img
            className={cn(`${CLASS_NAME}__background`, {
                [`${CLASS_NAME}__background--has-backgound`]: hasBackround
            })}
            src={background}
            alt="bg"
            onError={onErrorLoadingBackgound}
          />
        )}

        <div className={cn(`${CLASS_NAME}__panel`)}>
          <img className={cn(`${CLASS_NAME}__cover`)} src={cover} alt="cover" />

          <div className={cn(`${CLASS_NAME}__controls`)}>
            <PlayerControls
              trackName={trackName}
              onChangeTrack={onChangeTrack}
              onSetPlayer={onSetPlayer}
              firstTrackOnLoad={firstTrackOnLoad}
              onShowNextTrack={onShowNextTrack}
            />
          </div>
        </div>

        <div className={cn(`${CLASS_NAME}__tracklist`)}>
          <TrackList
            trackIndex={trackIndex}
            trackList={trackList}
            onPlayTrack={onPlayTrack}
          />
        </div>
      </div>
    );
  }
);
