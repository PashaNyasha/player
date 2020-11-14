import React, {memo, useCallback} from "react";
import {Text} from "../../../../../_components/text/";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Album-item";
const cn = classnames.bind(styles);

type PropsType = {
  url: string;
  name: string;
  onPlayMusic: (url: string) => void;
};

export const AlbumItem = memo(({url, name, onPlayMusic}: PropsType) => {
  const handlePlay = useCallback(() => {
    onPlayMusic(url);
  }, [url, onPlayMusic]);

  return (
    <button onClick={handlePlay} type="button" className={cn(CLASS_NAME)}>
      <Text text={name} size="h4" color="black" />
    </button>
  );
});
