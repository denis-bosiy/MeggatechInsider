import { TSetting } from "./types";

export enum BASIC_SETTINGS_PAGE_ACTIONS {
  NEW_COEFFICIENT = "NEW_COEFFICIENT",
  DELETE_SALARY_SETTING = "DELETE_SALARY_SETTING",
  SAVE_BASIC_SETTINGS = "SAVE_BASIC_SETTINGS",
  SAVE_SALARY_SETTINGS = "SAVE_SALARY_SETTINGS"
}

export type ActionNewCoefficient = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT;
  payload: { label: string; value: string };
};

export type ActionDeleteCoefficient = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.DELETE_SALARY_SETTING;
  payload: { id: string };
};

export type ActionSaveBasicSettings = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_BASIC_SETTINGS;
  payload: TSetting[];
};

export type ActionSaveSalarySettings = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SALARY_SETTINGS;
  payload: TSetting[];
};

export type BasicSettingsAction =
  | ActionNewCoefficient
  | ActionDeleteCoefficient
  | ActionSaveBasicSettings
  | ActionSaveSalarySettings;

export const BasicSettingsActionBuilder = {
  newCoefficient: (name: string, value: string) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT,
    payload: { name, value }
  }),
  deleteSalarySetting: (name: string) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.DELETE_SALARY_SETTING,
    payload: { name }
  }),
  saveBasicSettings: (values: TSetting[]) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_BASIC_SETTINGS,
    payload: { values }
  }),
  saveSalarySettings: (values: TSetting[]) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SALARY_SETTINGS,
    payload: { values }
  })
};
