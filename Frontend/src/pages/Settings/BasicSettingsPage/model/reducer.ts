import { guidGenerator } from "../../../../utils/guidGenerator";
import { BASIC_SETTINGS_PAGE_ACTIONS, BasicSettingsAction } from "./actions";
import { BasicSettingsData } from "./types";

const initData: BasicSettingsData = {
  basicSettings: [
    { id: guidGenerator(), label: "Кол-во 10 классов", value: "2" },
    { id: guidGenerator(), label: "Кол-во 11 классов", value: "3" },
    { id: guidGenerator(), label: "Недель в 1-й четверти", value: "8" },
    { id: guidGenerator(), label: "Начало 1-й четверти", value: "01.09.2022" },
    { id: guidGenerator(), label: "Недель во 2-й четверти", value: "7" },
    { id: guidGenerator(), label: "Начало 2-й четверти", value: "07.11.2022" },
    { id: guidGenerator(), label: "Недель в 3-й четверти", value: "10" },
    { id: guidGenerator(), label: "Начало 3-й четверти", value: "16.01.2023" },
    { id: guidGenerator(), label: "Недель в 4-й четверти", value: "8" },
    { id: guidGenerator(), label: "Начало 4-й четверти", value: "03.04.2023" }
  ],
  salarySettings: [
    { id: guidGenerator(), label: "Базовый оклад", value: "1000" },
    { id: guidGenerator(), label: "Доплата за литературу", value: "7000" },
    { id: guidGenerator(), label: "Коэф. за высшее образование", value: "0.5" },
    { id: guidGenerator(), label: "Коэф. за ученую степень к.н.", value: "0.6" },
    { id: guidGenerator(), label: "Коэф. за ученую степень д.н.", value: "0.7" },
    { id: guidGenerator(), label: "Коэф. за первую категорию", value: "0.4" },
    { id: guidGenerator(), label: "Коэф. за высшую категорию", value: "0.7" },
    { id: guidGenerator(), label: "Коэф. за углубленную категорию", value: "0.4" }
  ]
};

export const basicSettingsReducer = (state = initData, action: BasicSettingsAction) => {
  switch (action.type) {
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
