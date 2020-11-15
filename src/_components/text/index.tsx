import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {ColorsType, LetterSpacingType, SizeType} from "./_types";

const CLASS_NAME = "Text";
const cn = classnames.bind(styles);

type PropsType = {
  text: string;
  size: SizeType;
  color: ColorsType;
  isBold?: boolean;
  hasShadow?: boolean;
  letterSpacing?: LetterSpacingType;
};

export const Text = memo(
  ({text, isBold, hasShadow, size, color, letterSpacing}: PropsType) => (
    <span
      className={cn(
        CLASS_NAME,
        `${CLASS_NAME}--${color}`,
        `${CLASS_NAME}--${size}`,
        `${CLASS_NAME}--letter-spacing-${letterSpacing}`,
        {
          [`${CLASS_NAME}--is-bold`]: isBold,
          [`${CLASS_NAME}--has-shadow`]: hasShadow,
        }
      )}
    >
      {text}
    </span>
  )
);
