import React, {memo, ReactNode} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {Text} from "../text";

const CLASS_NAME = "Tooltip";
const cn = classnames.bind(styles);

type PropsType = {
  text: string;
  children: ReactNode;
};

export const Tooltip = memo(({text, children}: PropsType) => {
  return (
    <div className={cn(CLASS_NAME)} data-text={text}>
      <div className={cn(`${CLASS_NAME}__text-box`)}>
        <Text text={text} color="white" size="h4" isBold />
      </div>

      {children}
    </div>
  );
});
