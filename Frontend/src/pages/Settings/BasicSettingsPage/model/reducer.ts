import { BASIC_SETTINGS_PAGE_ACTIONS, BasicSettingsAction } from "./actions";
import { BasicSettingsData } from "./types";

const initData: BasicSettingsData = {
  basicSettings: {
    count10: { label: "Число 10-ых классов", value: "" },
    count11: { label: "Число 11-ых классов", value: "" },
    weeksIn1: { label: "Недель в 1 четверти", value: "" },
    start1: { label: "Начало 1 четверти", value: "" },
    weeksIn2: { label: "Недель во 2 четверти", value: "" },
    start2: { label: "Начало 2 четверти", value: "" },
    weeksIn3: { label: "Недель в 3 четверти", value: "" },
    start3: { label: "Начало 3 четверти", value: "" },
    weeksIn4: { label: "Недель в 4 четверти", value: "" },
    start4: { label: "Начало 4 четверти", value: "" }
  },
  salarySettings: [
    { label: "Базовый оклад", value: "1000" },
    { label: "Доплата за литературу", value: "7000" },
    { label: "Коэф. за высшее образование", value: "0,5" },
    { label: "Коэф. за ученую степень к.н.", value: "0,6" },
    { label: "Коэф. за ученую степень д.н.", value: "0,7" },
    { label: "Коэф. за первую категорию", value: "0,4" },
    { label: "Коэф. за высшую категорию", value: "0,7" },
    { label: "Коэф. за углубленную категорию", value: "0,4" }
  ]
};

export const basicSettingsReducer = (state = initData, action: BasicSettingsAction) => {
  switch (action.type) {
    case BASIC_SETTINGS_PAGE_ACTIONS.NEW_COEFFICIENT:
      return {
        ...state,
        salarySettings: [...state.salarySettings, { label: action.payload.name, value: action.payload.value }]
      };
    case BASIC_SETTINGS_PAGE_ACTIONS.DELETE_COEFFICIENT:
      return {
        ...state,
        salarySettings: state.salarySettings.filter((salary) => salary.label !== action.payload.name)
      };
    case BASIC_SETTINGS_PAGE_ACTIONS.SAVE_SETTINGS:
      return {
        ...state,
        basicSettings: action.payload.values
      };
    default:
      return state;
  }
};
