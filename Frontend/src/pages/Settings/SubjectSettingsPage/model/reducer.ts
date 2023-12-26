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
        pairs: action.payload
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_DEPTH_SETTINGS:
      return {
        ...state,
        pairs: action.payload
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_FINANCING_SETTINGS:
      return {
        ...state,
        pairs: action.payload
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_ISBASIS_SETTINGS:
      return {
        ...state,
        pairs: action.payload
      };
    case SYBJECT_SETTINGS_PAGE_ACTIONS.SAVE_TYPE_SETTINGS:
      return {
        ...state,
        pairs: action.payload
      };  
    default:
      return state;
  }
};

export { sybjectSettingsPageReducer };
