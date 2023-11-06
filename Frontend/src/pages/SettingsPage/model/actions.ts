import { TSetting } from "./types";

export enum BASIC_SETTINGS_PAGE_ACTIONS {
  NEW_COEFFICIENT = "NEW_COEFFICIENT",
  DELETE_COEFFICIENT = "DELETE_COEFFICIENT",
  SAVE_SETTINGS = "SAVE_SETTINGS"
}

export type ActionNewCoefficient = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT;
  payload: { name: string; value: string };
};

export type ActionDeleteCoefficient = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.DELETE_COEFFICIENT;
  payload: { name: string };
};

export type ActionSaveSettings = {
  type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SETTINGS;
  payload: { [name: string]: string };
};

export type BasicSettingsAction = ActionNewCoefficient | ActionDeleteCoefficient | ActionSaveSettings;

export const BasicSettingsActionBuilder = {
  newCoefficient: (name: string, value: string) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT,
    payload: { name, value }
  }),
  deleteCoefficient: (name: string) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.DELETE_COEFFICIENT,
    payload: { name }
  }),
  saveSettings: (values: { [name: string]: TSetting }) => ({
    type: BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SETTINGS,
    payload: { values }
  })
};
