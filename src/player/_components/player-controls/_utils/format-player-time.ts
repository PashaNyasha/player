type ParamsType = {
  time: number;
};

export const formatPlayerTime = ({time}: ParamsType): string => {
  const a = Math.floor(time);
  const minutes = Math.floor((a % 3600) / 60);
  const seconds = a % 60;

  const minutesWithZero = minutes < 10 ? `0${minutes}` : minutes;
  const secondsWithZero = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutesWithZero}:${secondsWithZero}`;
};
