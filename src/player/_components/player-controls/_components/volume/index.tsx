import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Volume";
const cn = classnames.bind(styles);

type PropsType = {
  onChangeVolume: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Volume = memo(({onChangeVolume}: PropsType) => (
  <div className={cn(CLASS_NAME)}>
    <div className={cn(`${CLASS_NAME}__icon`)} />

    <div className={cn(`${CLASS_NAME}__track`)}>
      <input
        type="range"
        name="volume"
        id="Volume"
        onChange={onChangeVolume}
        min={0}
        max={1}
        step={0.1}
        className={cn(`${CLASS_NAME}__range`)}
      />
    </div>
  </div>
));
