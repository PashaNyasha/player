import React, {
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {formatPlayerTime} from "./_utils/format-player-time";

const CLASS_NAME = "Player-controls";
const cn = classnames.bind(styles);

type PropsType = {
  onSetPlayer: (player: HTMLAudioElement) => void;
};

export const PlayerControls = memo(({onSetPlayer}: PropsType) => {
  const [time, setTime] = useState<string>('00:00');
  const [fullTime, setFullTime] = useState<string>('00:00')

  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioPlayer.current) {
      const {current} = audioPlayer;
      onSetPlayer(current);
    }
  }, [onSetPlayer]);

  const handlePlay = useCallback(() => {
    if (audioPlayer.current) {
      audioPlayer.current!.play();
    }
  }, []);

  const handleStop = useCallback(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
  }, []);

  const handlePause = useCallback(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
    }
  }, []);

  const onUpdateTime = useCallback(() => {
    if (audioPlayer.current) {
      const duration = audioPlayer.current.currentTime;
      const udpatedTime = formatPlayerTime({time: duration});
      setTime(udpatedTime);
    }
  }, []);

  const change = useCallback(() => {
    if (audioPlayer.current) {
      const {duration} = audioPlayer.current!;
      const fullTime = formatPlayerTime({time: duration});
      setFullTime(fullTime);
    }
  }, []);

  return (
    <div className={cn(CLASS_NAME)}>
      <audio
        controls
        onDurationChange={change}
        onTimeUpdate={onUpdateTime}
        ref={audioPlayer}
        preload="metadata"
      />

  <div className={cn(`${CLASS_NAME}__progress`)}>{time}/{fullTime}</div>

      <button onClick={handlePlay} className={cn(`${CLASS_NAME}__play`)}>
        Play
      </button>

      <button onClick={handlePause} className={cn(`${CLASS_NAME}__pause`)}>
        Pause
      </button>

      <button onClick={handleStop} className={cn(`${CLASS_NAME}__stop`)}>
        Stop
      </button>
    </div>
  );
});
