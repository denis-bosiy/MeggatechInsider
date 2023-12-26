import { SybjectSettingsAction, SYBJECT_SETTINGS_PAGE_ACTIONS } from "./actions";
import { FinancingSetting, CategorySetting, IsBasisSetting, DepthTypeSetting, TypeSetting, SettingsData} from "./types";

const initFinancingSettingsData: FinancingSetting[] = [];

const initCategorySettingData: CategorySetting[] = [];

const initIsBasisSettingData: IsBasisSetting[] = [];

const initDepthTypeSettingData: DepthTypeSetting[] = [];

const initTypeSettingData: TypeSetting[] = [];

const initData: SettingsData = {
  financingSettings: initFinancingSettingsData,
  categorySetting: initCategorySettingData,
  isBasisSetting: initIsBasisSettingData,
  depthTypeSetting: initDepthTypeSettingData,
  typeSetting: initTypeSettingData,
};

const sybjectSettingsPageReducer = (state = initData, action: SybjectSettingsAction) => {
  switch (action.type) {
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_CATEGORY_SETTINGS:
      return {
        ...state,
        categorySetting: action.payload.values
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_DEPTH_SETTINGS:
      return {
        ...state,
        depthTypeSetting: action.payload.values
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_FINANCING_SETTINGS:
      return {
        ...state,
        financingSettings: action.payload.values
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_ISBASIS_SETTINGS:
      return {
        ...state,
        isBasisSetting: action.payload.values
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_TYPE_SETTINGS:
      return {
        ...state,
        typeSetting: action.payload.values
      };  
    default:
      return state;
  }
};

export { sybjectSettingsPageReducer };
