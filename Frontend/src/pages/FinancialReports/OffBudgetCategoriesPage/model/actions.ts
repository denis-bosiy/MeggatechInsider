import {OffBudgetCategoriesPageData} from "./types";

enum OFF_BUDGET_CATEGORIES_PAGE_ACTIONS {
  SAVE_OFF_BUDGET_CATEGORIES = "SAVE_OFF_BUDGET_CATEGORIES",
}

type ActionSaveOffBudgetCategories = {
  type: OFF_BUDGET_CATEGORIES_PAGE_ACTIONS.SAVE_OFF_BUDGET_CATEGORIES,
  payload: OffBudgetCategoriesPageData,
}

type Action = ActionSaveOffBudgetCategories

const ActionBuilder = {
  saveOffBudgetCategories: (values: OffBudgetCategoriesPageData) => ({
    type: OFF_BUDGET_CATEGORIES_PAGE_ACTIONS.SAVE_OFF_BUDGET_CATEGORIES,
    payload: { values }
  }),
};

export {
  OFF_BUDGET_CATEGORIES_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
