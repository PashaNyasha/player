import React, {Component} from "react";
import {connect} from "react-redux";
import { Router } from "router5";
import { getPlayListSelector, setPlaylistAction } from "../redux/playlist";
import { PlayListType } from "../redux/playlist/types";
import { ReduxStorageType } from "../../types/redux-storage-type";


type PropsType = {
  playlist: PlayListType;
  router: Router;
  onSetPlayList: any;
};

class Player extends Component<PropsType> {
  handlePush = () => {
    this.props.onSetPlayList(["Hello"]);
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePush}>{this.props.playlist[0]}</button>
      </div>
    );
  }
}

const mapStateProps = (state: ReduxStorageType) => ({
  playlist: getPlayListSelector(state),
});

const mapDispatchToProps = {
  onSetPlayList: setPlaylistAction,
};

export const ConnectedPlayer = connect(
  mapStateProps,
  mapDispatchToProps
)(Player);
