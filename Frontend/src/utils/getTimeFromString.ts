import { Time } from "../core/Schedule/Time";

export const getTimeFromString = (time: string): Time => {
  const timeWithoutSpaces: string = time.replace(/\s+/g, "");
  const splittedTime: string[] = timeWithoutSpaces.split(".");

  const hours: number = parseFloat(splittedTime[0]);
  const minutes: number = parseFloat(splittedTime[1]);

  return new Time(hours, minutes);
};
