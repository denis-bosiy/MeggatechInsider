type OffBudgetCategoriesPageData = Array<OffBudgetCategoriData>

type OffBudgetCategoriData = {
  id: string,
  name: string,
  costPerHour: number,
  corporateSalaryValue: number,
}

export {
  type OffBudgetCategoriesPageData,
  type OffBudgetCategoriData
};
