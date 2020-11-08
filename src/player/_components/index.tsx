import React, {Component, createRef, useMemo} from "react";
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

type PropsType = {
  playlist: Array<PlayListItemType>;
  isLoading: boolean;
  router: Router;
  cover: string;
  onGetMusic: () => void;
};

class Player extends Component<PropsType> {
  audioPlayer = createRef<HTMLAudioElement>();

  handlePlay = (url: string) => {
    const {current} = this.audioPlayer;
    if (current) {
      current.src = `http://localhost:8082/album${url}`;
      current.play();
    }
  };

  render() {
    const {playlist, cover, isLoading} = this.props;
    console.log(cover)
    const albumCover = `http://localhost:8082${cover}`;

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="">
            <audio ref={this.audioPlayer} src="" controls></audio>
            <img src={albumCover} alt="cover"/>
            <ul>
              {playlist.map(({name, url}: PlayListItemType) => (
                <li key={name}>
                  <button onClick={() => this.handlePlay(url)}>{name}</button>
                </li>
              ))}
            </ul>
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
