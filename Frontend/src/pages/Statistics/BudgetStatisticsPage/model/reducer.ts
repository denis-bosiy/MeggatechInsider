import { BudgetStatisticsPageData } from "./types";

const initData: BudgetStatisticsPageData = {
  class10: [
    {
      id: 1,
      budget: "Бюджет",
      hours: 2,
      rates: 1
    },
    {
      id: 2,
      budget: "Внебюджет",
      hours: 1,
      rates: 20
    },
    {
      id: 3,
      budget: "Сумма",
      hours: 20,
      rates: 2
    },
    {
      id: 4,
      budget: "Спецкурс",
      hours: 10,
      rates: 20
    }
  ],
  class11: [
    {
      id: 1,
      budget: "Бюджет",
      hours: 2,
      rates: 1
    },
    {
      id: 2,
      budget: "Внебюджет",
      hours: 1,
      rates: 2
    }
  ],
  total: [
    {
      id: 1,
      budget: "Бюджет",
      hours: 2,
      rates: 1
    },
    {
      id: 2,
      budget: "Внебюджет",
      hours: 1,
      rates: 2
    }
  ]
};

const budgetStatisticsPageReducer = (state = initData) => {
  return state;
};

export { budgetStatisticsPageReducer };
