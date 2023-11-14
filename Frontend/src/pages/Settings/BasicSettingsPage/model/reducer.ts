import { guidGenerator } from "../../../../utils/guidGenerator";
import { BASIC_SETTINGS_PAGE_ACTIONS, BasicSettingsAction } from "./actions";
import { BasicSettingsData } from "./types";

const initData: BasicSettingsData = {
  basicSettings: [
    { id: guidGenerator(), label: "Число 10-ых классов", value: "" },
    { id: guidGenerator(), label: "Число 11-ых классов", value: "" },
    { id: guidGenerator(), label: "Недель в 1 четверти", value: "" },
    { id: guidGenerator(), label: "Начало 1 четверти", value: "" },
    { id: guidGenerator(), label: "Недель во 2 четверти", value: "" },
    { id: guidGenerator(), label: "Начало 2 четверти", value: "" },
    { id: guidGenerator(), label: "Недель в 3 четверти", value: "" },
    { id: guidGenerator(), label: "Начало 3 четверти", value: "" },
    { id: guidGenerator(), label: "Недель в 4 четверти", value: "" },
    { id: guidGenerator(), label: "Начало 4 четверти", value: "" }
  ],
  salarySettings: [
    { id: guidGenerator(), label: "Базовый оклад", value: "1000" },
    { id: guidGenerator(), label: "Доплата за литературу", value: "7000" },
    { id: guidGenerator(), label: "Коэф. за высшее образование", value: "0,5" },
    { id: guidGenerator(), label: "Коэф. за ученую степень к.н.", value: "0,6" },
    { id: guidGenerator(), label: "Коэф. за ученую степень д.н.", value: "0,7" },
    { id: guidGenerator(), label: "Коэф. за первую категорию", value: "0,4" },
    { id: guidGenerator(), label: "Коэф. за высшую категорию", value: "0,7" },
    { id: guidGenerator(), label: "Коэф. за углубленную категорию", value: "0,4" }
  ]
};

export const basicSettingsReducer = (state = initData, action: BasicSettingsAction) => {
  switch (action.type) {
    case BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT:
      return {
        ...state,
        salarySettings: [
          ...state.salarySettings,
          { id: guidGenerator(), label: action.payload.label, value: action.payload.value }
        ]
      };
    case BASIC_SETTINGS_PAGE_ACTIONS.DELETE_SALARY_SETTING:
      return {
        ...state,
        salarySettings: state.salarySettings.filter((salary) => salary.id !== action.payload.id)
      };
    case BASIC_SETTINGS_PAGE_ACTIONS.SAVE_BASIC_SETTINGS:
      return {
        ...state,
        basicSettings: action.payload.values
      };
    case BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SALARY_SETTINGS:
      return {
        ...state,
        salarySettings: action.payload.values
      };
    default:
      return state;
  }
};
