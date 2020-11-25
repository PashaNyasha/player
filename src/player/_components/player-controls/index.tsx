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
import {ProgressBar} from "./_components/progress-bar";
import {Tooltip} from "../../../_components/tooltip";
import {Volume} from "./_components/volume";

const CLASS_NAME = "Player-controls";
const cn = classnames.bind(styles);

type PropsType = {
  trackName: string;
  firstTrackOnLoad: TrackListItemType;
  onChangeTrack: () => void;
  onSetPlayer: (player: HTMLAudioElement) => void;
  onShowNextTrack: () => void;
};

export const PlayerControls = memo(
  ({
    trackName,
    firstTrackOnLoad: {url, name: firstTrackName},
    onChangeTrack,
    onSetPlayer,
    onShowNextTrack,
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

        const updatedProgress = (currentTime / duration) * 100;
        setProgress(String(updatedProgress));

        if (updatedProgress > 70) {
          onShowNextTrack();
        }

        // if (currentTime === duration) {
        //   onChangeTrack();
        // }
      }
    }, [duration, onChangeTrack, onShowNextTrack]);

    const onChangeDuration = useCallback(() => {
      if (audioPlayer.current) {
        const {duration} = audioPlayer.current;
        setDuration(duration);
      }
    }, []);

    const handleChangeProgress = useCallback(
      ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        const {current} = audioPlayer;
        if (current) {
          setProgress(value);
          console.log(value);
          current.currentTime = Number(value);
        }
      },
      []
    );

    const handleChangeVolume = useCallback(
      ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        const {current} = audioPlayer;
        if (current) {
          current.volume = Number(value);
        }
      },
      []
    );

    const onErrorPlayerSrc = useCallback(() => {
      const {current} = audioPlayer;
      if (current) {
        current.pause();
        current.currentTime = 0;
      }
    }, []);

    return (
      <div className={cn(CLASS_NAME)}>
        <Tooltip text={currentTrackName}>
          <div className={cn(`${CLASS_NAME}__track-name`)}>
            <Text
              text={currentTrackName}
              color="white"
              size="h1"
              isBold
              hasShadow
              letterSpacing="2"
            />
          </div>
        </Tooltip>

        <audio
          onDurationChange={onChangeDuration}
          onTimeUpdate={onUpdateTime}
          ref={audioPlayer}
          src={url}
          onError={onErrorPlayerSrc}
        />

        <ProgressBar
          progress={progress}
          onChangeProgress={handleChangeProgress}
          max={duration}
          currentTime={currentTime}
          isDisabled={!isPlaying}
        />

        <div className={cn(`${CLASS_NAME}__progress`)}>
          <Text text={time} color="black" size="h2" />
        </div>

        <div className={cn(`${CLASS_NAME}__buttons`)}>
          <button
            onClick={handlePlay}
            className={cn(`${CLASS_NAME}__play-button`, {
              [`${CLASS_NAME}__play-button--is-pause`]: isPlaying,
            })}
            disabled={isButtonDisabled}
          />

          <Volume onChangeVolume={handleChangeVolume} />
        </div>
      </div>
    );
  }
);
