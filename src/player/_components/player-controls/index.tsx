import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {formatPlayerTime} from "./_utils/format-player-time";
import {Text} from "../../../_components/text";
import {TrackListItemType} from "../../redux/player/types";
import {ProgressBar} from "./_components/track/progress-bar";

const CLASS_NAME = "Player-controls";
const cn = classnames.bind(styles);

type PropsType = {
  trackName: string;
  firstTrackOnLoad: TrackListItemType;
  onChangeTrack: () => void;
  onSetPlayer: (player: HTMLAudioElement) => void;
};

export const PlayerControls = memo(
  ({
    trackName,
    firstTrackOnLoad: {url, name: firstTrackName},
    onChangeTrack,
    onSetPlayer,
  }: PropsType) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [progress, setProgress] = useState<string>("0");

    const audioPlayer = useRef<HTMLAudioElement>(null);

    useEffect(() => {
      if (audioPlayer.current) {
        const {current} = audioPlayer;
        onSetPlayer(current);
      }
    }, [onSetPlayer]);

    const time = useMemo(() => {
      const updatedTime = formatPlayerTime({time: currentTime});
      const fullTime = formatPlayerTime({time: duration});

      return `${updatedTime} / ${fullTime}`;
    }, [currentTime, duration]);

    const currentTrackName = useMemo(() => trackName || firstTrackName, [
      firstTrackName,
      trackName,
    ]);

    const isButtonDisabled = useMemo(() => url === "", [url]);

    const handlePlay = useCallback(() => {
      const {current} = audioPlayer;
      if (current) {
        if (isPlaying) {
          current.pause();
          setIsPlaying(false);
        } else {
          current.play();
          setIsPlaying(true);
        }
      }
    }, [isPlaying]);

    const onUpdateTime = useCallback(() => {
      if (audioPlayer.current) {
        const {currentTime} = audioPlayer.current;
        setCurrentTime(currentTime);

        const updatedProgress = String(
          Math.floor((currentTime / duration) * 100)
        );

        setProgress(updatedProgress);

        if (currentTime === duration) {
          onChangeTrack();
        }
      }
    }, [duration, onChangeTrack]);

    const onChangeDuration = useCallback(() => {
      if (audioPlayer.current) {
        const {duration} = audioPlayer.current;
        setDuration(duration);
      }
    }, []);

    const handleChangeProgress = useCallback(
      ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        // setProgress(value);
        const {current} = audioPlayer;
        if (current) {
          setCurrentTime(Number(value));
          current.currentTime = Number(value);
          setProgress(value);
          console.log(value)
        }
      },
      []
    );

    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__track-name`)}>
          <Text text={currentTrackName} color="black" size="h1" isBold />
        </div>

        <audio
          controls
          onDurationChange={onChangeDuration}
          onTimeUpdate={onUpdateTime}
          ref={audioPlayer}
          src={`http://localhost:8082/album${url}`}
        />

        <ProgressBar
          progress={progress}
          onChangeProgress={handleChangeProgress}
          min={0}
          max={duration}
          currentTime={currentTime}
        />

        <div className={cn(`${CLASS_NAME}__progress`)}>
          <Text text={time} color="black" size="h2" />
        </div>

        <button
          onClick={handlePlay}
          className={cn(`${CLASS_NAME}__play-button`, {
            [`${CLASS_NAME}__play-button--is-pause`]: isPlaying,
          })}
          disabled={isButtonDisabled}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
);
