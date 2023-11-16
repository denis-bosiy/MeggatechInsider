import { BudgetStatisticsPageData } from "./types";

const initData: BudgetStatisticsPageData = {
  class10: [{
    id: 1,
    budget: "Бюджет",
    hours: 1,
    rates: 1,
  },
  {
    id: 2,
    budget: "Внебюджет",
    hours: 1,
    rates: 1,
  },],
  class11: [{
    id: 1,
    budget: "Бюджет",
    hours: 1,
    rates: 1,
  },
  {
    id: 2,
    budget: "Внебюджет",
    hours: 1,
    rates: 1,
  },],
  total: [{
    id: 1,
    budget: "Бюджет",
    hours: 1,
    rates: 1,
  },
  {
    id: 2,
    budget: "Внебюджет",
    hours: 1,
    rates: 1,
  },]

};

const budgetStatisticsPageReducer = (state = initData) => {
  return state;
};

export { budgetStatisticsPageReducer };
