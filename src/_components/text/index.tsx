import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {ColorsType, SizeType} from "./_types";

const CLASS_NAME = "Text";
const cn = classnames.bind(styles);

type PropsType = {
  text: string;
  size: SizeType;
  color: ColorsType;
  isBold?: boolean;
};

export const Text = memo(({text, isBold, size, color}: PropsType) => (
  <span
    className={cn(
      CLASS_NAME,
      `${CLASS_NAME}--${color}`,
      `${CLASS_NAME}--${size}`,
      {
        [`${CLASS_NAME}--is-bold`]: isBold,
      }
    )}
  >
    {text}
  </span>
));
