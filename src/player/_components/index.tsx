import React, {Component} from "react";
import {connect} from "react-redux";
import {Router} from "router5";

type PropsType = {
  router: Router;
};

class Player extends Component<PropsType> {
  render() {
    return <div>Hello</div>;
  }
}

export const ConnectedPlayer = connect()(Player);
