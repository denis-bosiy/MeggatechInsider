import { WeekSelectOption, YearSelectOption } from "./types";

export enum HEADER_ACTIONS {
  SET_AVAILABLE_YEARS = "SET_AVAILABLE_YEARS",
  SET_AVAILABLE_WEEKS = "SET_AVAILABLE_WEEKS",
  CHOOSE_YEAR = "CHOOSE_YEAR",
  CHOOSE_WEEK = "CHOOSE_WEEK",
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT"
}

export type ActionSetAvailableYears = {
  type: HEADER_ACTIONS.SET_AVAILABLE_YEARS;
  payload: YearSelectOption[];
};

export type ActionChooseYear = {
  type: HEADER_ACTIONS.CHOOSE_YEAR;
  payload: string;
};

export type ActionSetAvailableWeeks = {
  type: HEADER_ACTIONS.SET_AVAILABLE_WEEKS;
  payload: WeekSelectOption[];
};

export type ActionChooseWeek = {
  type: HEADER_ACTIONS.CHOOSE_WEEK;
  payload: string;
};

export type ActionLogIn = {
  type: HEADER_ACTIONS.LOG_IN;
};

export type ActionLogOut = {
  type: HEADER_ACTIONS.LOG_OUT;
};

export type HeaderAction =
  | ActionSetAvailableYears
  | ActionChooseYear
  | ActionSetAvailableWeeks
  | ActionChooseWeek
  | ActionLogIn
  | ActionLogOut;

export const HeaderActionBuilder = {
  setAvailableYears: (values: YearSelectOption[]) => ({
    type: HEADER_ACTIONS.SET_AVAILABLE_YEARS,
    payload: { values }
  }),
  chooseYear: (id: string) => ({
    type: HEADER_ACTIONS.CHOOSE_YEAR,
    payload: id
  }),
  setAvailableWeeks: (values: WeekSelectOption[]) => ({
    type: HEADER_ACTIONS.SET_AVAILABLE_WEEKS,
    payload: { values }
  }),
  chooseWeek: (id: string) => ({
    type: HEADER_ACTIONS.CHOOSE_WEEK,
    payload: id
  }),
  logIn: () => ({
    type: HEADER_ACTIONS.LOG_IN
  }),
  logOut: () => ({
    type: HEADER_ACTIONS.LOG_OUT
  })
};
