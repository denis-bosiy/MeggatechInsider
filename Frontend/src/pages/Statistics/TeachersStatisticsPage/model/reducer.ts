import { Action, TEACHERS_STATISTICS_PAGE_ACTIONS } from "./actions";
import {TeachersStatisticsPageData} from "./types";

const initData: TeachersStatisticsPageData = [
  {
    id: "0",
    name: "Леонид Хорошавин",
    workExperience: 5,
    hoursFor1HalfOfTheYear: 25,
    hoursFor2HalfOfTheYear: 57,
    hoursTotal: 105,
    hoursBudget: 44,
    hoursOffbudget: 24,
    hoursBsk: 13,
    rateTotal: 52,
    rateBudget: 52,
    rateOffbudget: 22,
    rateBsk: 61,
    hoursPerWeekTotal: 12,
    hoursPerWeekBudget: 32,
    hoursPerWeekOffbudget: 34,
    hoursPerWeekBsk: 31
  },
  {
    id: "1",
    name: "Александр Мушкин",
    workExperience: 2,
    hoursFor1HalfOfTheYear: 62,
    hoursFor2HalfOfTheYear: 73,
    hoursTotal: 105,
    hoursBudget: 13,
    hoursOffbudget: 62,
    hoursBsk: 31,
    rateTotal: 12,
    rateBudget: 51,
    rateOffbudget: 72,
    rateBsk: 54,
    hoursPerWeekTotal: 96,
    hoursPerWeekBudget: 12,
    hoursPerWeekOffbudget: 53,
    hoursPerWeekBsk: 13
  }
];

const teachersStatisticsPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TEACHERS_STATISTICS_PAGE_ACTIONS.SAVE_STATISTICS:
      return action.payload.values;
    default:
      return state;
  }
};

export { teachersStatisticsPageReducer };
