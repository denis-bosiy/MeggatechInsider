import { Action, OFF_BUDGET_CATEGORIES_PAGE_ACTIONS, } from "./actions";
import { OffBudgetCategoriesPageData } from "./types";

const initData: OffBudgetCategoriesPageData = [
  {
    id: "0",
    name: "1",
    costPerHour: 1000,
    corporateSalaryValue: 1000,  
  },
];

const offBudgetCategoriesPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case OFF_BUDGET_CATEGORIES_PAGE_ACTIONS.SAVE_OFF_BUDGET_CATEGORIES:
      return action.payload.values;
    default:
      return state;
  }
};

export { offBudgetCategoriesPageReducer };
