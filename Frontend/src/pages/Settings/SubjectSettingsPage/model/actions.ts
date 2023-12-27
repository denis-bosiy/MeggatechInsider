import { FinancingSetting, CategorySetting, IsBasisSetting, DepthTypeSetting, TypeSetting} from "./types";

export enum SYBJECT_SETTINGS_PAGE_ACTIONS {
  SAVE_FINANCING_SETTINGS = "SAVE_FINANCING_SETTINGS",
  SAVE_CATEGORY_SETTINGS = "SAVE_CATEGORY_SETTINGS",
  SAVE_ISBASIS_SETTINGS = "SAVE_ISBASIS_SETTINGS",
  SAVE_DEPTH_SETTINGS = "SAVE_DEPTH_SETTINGS",
  SAVE_TYPE_SETTINGS = "SAVE_TYPE_SETTINGS",
}

export type ActionSaveTypeSettings = {
  type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_TYPE_SETTINGS;
  payload: TypeSetting[];
};

export type ActionSaveFinancingSettings = {
  type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_FINANCING_SETTINGS;
  payload: FinancingSetting[];
};

export type ActionSaveCategorySettings = {
  type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_CATEGORY_SETTINGS;
  payload: CategorySetting[];
};

export type ActionSaveIsBasisSettings = {
  type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_ISBASIS_SETTINGS;
  payload: IsBasisSetting[];
};

export type ActionSaveDepthTypeSettings = {
  type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_DEPTH_SETTINGS;
  payload: DepthTypeSetting[];
};

export type SybjectSettingsAction =
    ActionSaveDepthTypeSettings | ActionSaveIsBasisSettings | ActionSaveCategorySettings
    | ActionSaveFinancingSettings | ActionSaveTypeSettings;

export const SybjectSettingsActionBuilder = {
  saveTypeSettings: (values: TypeSetting[]) => ({
    type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_TYPE_SETTINGS,
    payload: { values }
  }),
  saveDepthTypeSettings: (values: DepthTypeSetting[]) => ({
    type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_DEPTH_SETTINGS,
    payload: { values }
  }),
  saveIsBasisSettings: (values: IsBasisSetting[]) => ({
    type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_ISBASIS_SETTINGS,
    payload: { values }
  }),
  saveCategorySettings: (values: CategorySetting[]) => ({
    type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_CATEGORY_SETTINGS,
    payload: { values }
  }),
  saveFinancingSettings: (values: FinancingSetting[]) => ({
    type: SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_FINANCING_SETTINGS,
    payload: { values }
  }),
};
