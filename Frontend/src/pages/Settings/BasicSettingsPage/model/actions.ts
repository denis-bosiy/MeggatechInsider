import { TSetting } from "./types";

export enum BASIC_SETTINGS_PAGE_ACTIONS {
  SAVE_BASIC_SETTINGS = "SAVE_BASIC_SETTINGS",
  SAVE_SALARY_SETTINGS = "SAVE_SALARY_SETTINGS"
}

export type ActionSaveBasicSettings = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_BASIC_SETTINGS;
  payload: TSetting[];
};

export type ActionSaveSalarySettings = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SALARY_SETTINGS;
  payload: TSetting[];
};

export type BasicSettingsAction =
  ActionSaveBasicSettings
  | ActionSaveSalarySettings;

export const BasicSettingsActionBuilder = {
  saveBasicSettings: (values: TSetting[]) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_BASIC_SETTINGS,
    payload: { values }
  }),
  saveSalarySettings: (values: TSetting[]) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SALARY_SETTINGS,
    payload: { values }
  })
};
