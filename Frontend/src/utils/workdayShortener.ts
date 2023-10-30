import { Workday } from "../core/Schedule/Workday";

export const shortenWorkday = (workday: Workday): string => {
  switch (workday) {
    case Workday.Monday:
      return "пн";
    case Workday.Tuesday:
      return "вт";
    case Workday.Wednesday:
      return "ср";
    case Workday.Thursday:
      return "чт";
    case Workday.Friday:
      return "пт";
    default:
      return "";
  }
};
