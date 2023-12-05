import {CategoriesStatisticsPageData} from "./types";

const initData: CategoriesStatisticsPageData = [{
  id: "0",
  name: "ИстОбщ",
  hoursBudget: 0,
  hoursOffbudget: 66,
  hoursBsp: 0,
  rateBudget: 0.15,
  rateOffbudget: 0,
  rateBsp: 0.02
},
{
  id: "1",
  name: "ФизХим",
  hoursBudget: 361,
  hoursOffbudget: 0,
  hoursBsp: 0,
  rateBudget: 0.85,
  rateOffbudget: 0,
  rateBsp: 0
},
{
  id: "2",
  name: "ИнЯз",
  hoursBudget: 264,
  hoursOffbudget: 12,
  hoursBsp: 0,
  rateBudget: 0,
  rateOffbudget: 0.59,
  rateBsp: 0.02
},
{
  id: "3",
  name: "Мат",
  hoursBudget: 0,
  hoursOffbudget: 66,
  hoursBsp: 11,
  rateBudget: 0.15,
  rateOffbudget: 0.13,
  rateBsp: 0.02
}];

const categoriesStatisticsPageReducer = (state = initData) => {
  return state;
};

export {categoriesStatisticsPageReducer};
