import React, {ChangeEvent, memo, useEffect, useRef} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Progress-bar";
const cn = classnames.bind(styles);

type PropsType = {
  progress: string;
  min: number;
  max: number;
  currentTime: number;
  onChangeProgress: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ProgressBar = memo(
  ({min, max, currentTime, progress, onChangeProgress}: PropsType) => {
    const doneLineRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (doneLineRef.current) {
        doneLineRef.current.style.width = `${progress}%`;
      }
      if (thumbRef.current) {
        thumbRef.current.style.left = `${progress}%`;
      }
    }, [progress]);

    return (
      <div className={cn(CLASS_NAME)}>
        <input
          className={cn(`${CLASS_NAME}__range`)}
          type="range"
          value={progress}
          min={0}
          max={1000}
          onChange={onChangeProgress}
        />

        <div ref={doneLineRef} className={cn(`${CLASS_NAME}__done-line`)} />

        <div ref={thumbRef} className={cn(`${CLASS_NAME}__thumb`)} />
      </div>
    );
  }
);
