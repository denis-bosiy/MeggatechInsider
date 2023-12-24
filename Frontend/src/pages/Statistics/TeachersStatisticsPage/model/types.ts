type TeachersStatisticsPageData = Array<TeacherStatisticsData>

type TeacherStatisticsData = {
  id: string,
  name: string,
  workExperience: number,
  hoursFor1HalfOfTheYear: number,
  hoursFor2HalfOfTheYear: number,
  hoursTotal: number,
  hoursBudget: number,
  hoursOffbudget: number,
  hoursBsk: number,
  rateTotal: number,
  rateBudget: number,
  rateOffbudget: number,
  rateBsk: number,
  hoursPerWeekTotal: number,
  hoursPerWeekBudget: number,
  hoursPerWeekOffbudget: number,
  hoursPerWeekBsk: number
}

export {
  type TeachersStatisticsPageData,
  type TeacherStatisticsData
};
