import React, {Component} from "react";
import {createPortal} from "react-dom";

const portal = document.getElementById("portal");

type PropsType = {
  children: React.ReactNode;
  prefix: string;
};

export class Portal extends Component<PropsType> {
  container: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.container = document.createElement("div");
    this.container.id = `${props.prefix}`;
    portal!.appendChild(this.container);
  }

  render() {
    const {children} = this.props;
    return createPortal(children, this.container);
  }
}
