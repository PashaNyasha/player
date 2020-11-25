import React, {Component} from "react";
import {connect} from "react-redux";
import {Router} from "router5";
import {ReduxStorageType} from "../../types/redux-storage-type";
import {Spinner} from "../../_components/spinner";
import {
  getAlbumCoverSelector,
  getTrackListSelector,
  getTracksCountSelector,
  isPlaylistLoadingSelector,
  getPlayerSelector,
  getTrackIndexSelector,
  getTrackNameSelector,
  setPlayerAction,
  setTrackIndexAction,
  setTrackNameAction,
  getFirstTrackSelector,
  getAlbumBackgroundSelector,
} from "../redux/player";
import {TrackListItemType} from "../redux/player/types";
import {PlayerControls} from "../_components/player-controls";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {HandlePlayType} from "./_types";
import {TrackList} from "./__components/track-list";
import {
  SetNotificationType,
  showNotificationAction,
} from "../../redux/notifications";
import {getNextTrackInfo} from "./_utils/get-nex-track-info";

const CLASS_NAME = "Player";
const cn = classnames.bind(styles);

type PropsType = {
  trackList: Array<TrackListItemType>;
  player: HTMLAudioElement;
  trackIndex: number;
  trackName: string;
  router: Router;
  cover: string;
  tracksCount: number;
  firstTrackOnLoad: TrackListItemType;
  background: string;
  isLoading: boolean;
  onShowNotification: (params: SetNotificationType) => void;
  onSetTrackName: (name: string) => void;
  onSetTrackIndex: (index: number) => void;
  onSetPlayer: (player: HTMLAudioElement) => void;
};

type StateType = {
  hasBackround: boolean;
};

class Player extends Component<PropsType, StateType> {
  state = {
    hasBackround: true,
  };

  handlePlay = ({url, name, index}: HandlePlayType) => {
    const {player, onSetTrackName, onSetTrackIndex} = this.props;
    player.src = url;
    player.play();

    onSetTrackName(name);
    onSetTrackIndex(index);
  };

  onChangeTrack = () => {
    const {trackList, tracksCount, trackIndex} = this.props;
    const {url, name, index} = getNextTrackInfo({
      trackList,
      tracksCount,
      trackIndex,
    });

    this.handlePlay({url, name, index});
  };

  onErrorLoadingBackgound = () => {
    this.setState({hasBackround: false});
  };

  onShowNextTrack = () => {
    const {trackList, tracksCount, trackIndex, onShowNotification} = this.props;
    const {name} = getNextTrackInfo({trackList, tracksCount, trackIndex});

    onShowNotification({text: name});
  };

  render() {
    const {
      trackList,
      cover,
      trackIndex,
      trackName,
      isLoading,
      firstTrackOnLoad,
      background,
      onSetPlayer,
    } = this.props;

    const {hasBackround} = this.state;

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={cn(CLASS_NAME)}>
            {hasBackround && (
              <img
                className={cn(`${CLASS_NAME}__background`)}
                src={background}
                alt="bg"
                onError={this.onErrorLoadingBackgound}
              />
            )}

            <div className={cn(`${CLASS_NAME}__panel`)}>
              <img
                className={cn(`${CLASS_NAME}__cover`)}
                src={cover}
                alt="cover"
              />

              <div className={cn(`${CLASS_NAME}__controls`)}>
                <PlayerControls
                  trackName={trackName}
                  onChangeTrack={this.onChangeTrack}
                  onSetPlayer={onSetPlayer}
                  firstTrackOnLoad={firstTrackOnLoad}
                  onShowNextTrack={this.onShowNextTrack}
                />
              </div>
            </div>

            <div className={cn(`${CLASS_NAME}__tracklist`)}>
              <TrackList
                trackIndex={trackIndex}
                trackList={trackList}
                onPlayTrack={this.handlePlay}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStorageType) => ({
  trackList: getTrackListSelector(state),
  cover: getAlbumCoverSelector(state),
  tracksCount: getTracksCountSelector(state),
  player: getPlayerSelector(state),
  trackIndex: getTrackIndexSelector(state),
  trackName: getTrackNameSelector(state),
  firstTrackOnLoad: getFirstTrackSelector(state),
  background: getAlbumBackgroundSelector(state),
  isLoading: isPlaylistLoadingSelector(state),
});

const mapDispatchToProps = {
  onSetTrackName: setTrackNameAction,
  onSetTrackIndex: setTrackIndexAction,
  onSetPlayer: setPlayerAction,
  onShowNotification: showNotificationAction,
};

export const ConnectedPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
