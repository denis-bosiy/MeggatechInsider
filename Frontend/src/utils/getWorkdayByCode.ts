import { Workday } from "../core/Schedule/Workday";

export const getWorkdayByCode = (code: number): Workday => {
  switch (code) {
    case 0:
      return Workday.Monday;
    case 1:
      return Workday.Tuesday;
    case 2:
      return Workday.Wednesday;
    case 3:
      return Workday.Thursday;
    case 4:
      return Workday.Friday;
    case 5:
      return Workday.Saturday;
    case 6:
      return Workday.Sunday;
    default:
      return Workday.Monday;
  }
};
