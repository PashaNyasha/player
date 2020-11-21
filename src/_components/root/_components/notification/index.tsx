import React, {Component} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {Text} from "../../../text";
import {connect} from "react-redux";
import {
  getNotificationTextSelector,
  getNotificationTimeoutSelector,
  hideNotificationAction,
  isShowNotificationSelector,
} from "../../../../redux/notifications";
import {ReduxStorageType} from "../../../../types/redux-storage-type";

const CLASS_NAME = "Notification";
const cn = classnames.bind(styles);

type PropsType = {
  text: string;
  isShow: boolean;
  timeout?: number;
  onHideNotification: () => void;
};

export class WrappedComponent extends Component<PropsType> {
  componentDidUpdate() {
    if (this.props.isShow) {
      const {timeout, onHideNotification} = this.props;
      setTimeout(onHideNotification, timeout);
    }
  }

  render() {
    const {text, isShow} = this.props;

    return (
      <div className={cn(CLASS_NAME, {[`${CLASS_NAME}--is-show`]: isShow})}>
        <div className={cn(`${CLASS_NAME}__header`)}>
          <Text text="Далее" color="white" size="h5" />
        </div>
        <Text text={text} color="white" size="h4" />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStorageType) => ({
  text: getNotificationTextSelector(state),
  isShow: isShowNotificationSelector(state),
  timeout: getNotificationTimeoutSelector(state),
});

const mapDispatchToProps = {
  onHideNotification: hideNotificationAction,
};

export const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponent);
