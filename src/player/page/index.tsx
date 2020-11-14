import React, {Component} from "react";
import {connect} from "react-redux";
import {Router} from "router5";
import {ReduxStorageType} from "../../types/redux-storage-type";
import {Spinner} from "../../_components/spinner";
import {
  getCoverSelector,
  getMusicActionSaga,
  getPlayListSelector,
  isPlaylistLoadingSelector,
} from "../redux/player";
import {PlayListItemType} from "../redux/player/types";
import {PlayerControls} from "../_components/player-controls";
import {AlbumItem} from "../_components/player-controls/_components/album-item";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Player";
const cn = classnames.bind(styles);

type PropsType = {
  playlist: Array<PlayListItemType>;
  isLoading: boolean;
  router: Router;
  cover: string;
  onGetMusic: () => void;
};

type StateType = {
  player: HTMLAudioElement;
};

class Player extends Component<PropsType, StateType> {
  state = {
    player: new Audio(),
  };

  handleSetPlayer = (player: HTMLAudioElement) => {
    this.setState({player});
  };

  handlePlay = (url: string) => {
    const {player} = this.state;
    if (player) {
      player.src = `http://localhost:8082/album${url}`;
      player.play();
    }
  };

  render() {
    const {playlist, cover, isLoading} = this.props;
    const albumCover = `http://localhost:8082${cover}`;

    console.log("render");
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={cn(CLASS_NAME)}>
            <img src={albumCover} alt="cover" />

            <PlayerControls onSetPlayer={this.handleSetPlayer} />

            <div className={cn(`${CLASS_NAME}__playlist`)}>
              {playlist.map(({url, name}: PlayListItemType) => (
                <AlbumItem
                  url={url}
                  name={name}
                  onPlayMusic={this.handlePlay}
                  key={name}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStorageType) => ({
  playlist: getPlayListSelector(state),
  cover: getCoverSelector(state),
  isLoading: isPlaylistLoadingSelector(state),
});

const mapDispatchToProps = {
  onGetMusic: getMusicActionSaga,
};

export const ConnectedPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
