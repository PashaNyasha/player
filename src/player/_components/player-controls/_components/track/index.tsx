import React, {memo, useCallback, useMemo} from "react";
import {Text} from "../../../../../_components/text";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {HandlePlayType} from "../../../../page/_types";

const CLASS_NAME = "Track";
const cn = classnames.bind(styles);

type PropsType = {
  url: string;
  name: string;
  index: number;
  currentIndex: number;
  onPlayMusic: (params: HandlePlayType) => void;
};

export const Track = memo(
  ({url, name, index, currentIndex, onPlayMusic}: PropsType) => {
    const isActive = useMemo(() => index === currentIndex, [
      index,
      currentIndex,
    ]);

    const handlePlay = useCallback(() => {
      onPlayMusic({url, name, index});
    }, [onPlayMusic, url, name, index]);

    return (
      <button
        onClick={handlePlay}
        type="button"
        className={cn(CLASS_NAME, {[`${CLASS_NAME}--is-active`]: isActive})}
      >
        <Text text={name} size="h4" color="white" hasShadow />
      </button>
    );
  }
);
