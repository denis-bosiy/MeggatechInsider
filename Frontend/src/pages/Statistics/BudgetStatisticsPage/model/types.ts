type BudgetStatisticsPageData = {
    class10: BudgetStatisticsData,
    class11: BudgetStatisticsData,
    total: BudgetStatisticsData,
}

type BudgetStatisticsData = Array<BudgetStatisticsTableData>

type BudgetStatisticsTableData = {
    id: number,
    budget: string,
    hours: number,
    rates: number,
}

export {
  type BudgetStatisticsPageData,
  type BudgetStatisticsData,
  type BudgetStatisticsTableData,
};
