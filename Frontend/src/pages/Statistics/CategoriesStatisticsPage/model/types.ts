type CategoriesStatisticsPageData = Array<CategoriesStatisticsData>

type CategoriesStatisticsData = {
  id: string,
  name: string,
  hoursBudget: number,
  hoursOffbudget: number,
  hoursBsp: number,
  rateBudget: number,
  rateOffbudget: number,
  rateBsp: number

}

export {
  type CategoriesStatisticsPageData,
  type CategoriesStatisticsData
};
