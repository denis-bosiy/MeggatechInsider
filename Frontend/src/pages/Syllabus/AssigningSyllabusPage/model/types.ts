type AssigningsSyllabusData = Array<AssigningSyllabusData>
type DiscrepanciesSyllabusData = Array<DiscrepancySyllabusData>

type AssigningSyllabusData = {
  id: string,
  name: string,
  teacher: string,
  groupCount: number,
  hoursByPlanOnClassOfTheStudents: number,
  hoursOnWeekForTheClassOfTheStudents: number,
  hoursOnWeekOnYearOnTheTeacher: number,
  hoursOnWeekOnPeriodOnTheTeacher: number,
  hoursIn1Subgroup: number,
  hoursIn2Subgroup: number,
  totalInYear: number,
  bidShare: number
}

type DiscrepancySyllabusData = {
  id: string,
  name: string,
  groupCount: number,
  groupCountByPlan: number
}

type AssigningSyllabusPageData = {
  assignings: AssigningsSyllabusData,
  discrepancies: DiscrepanciesSyllabusData
}

export {
  type AssigningsSyllabusData,
  type DiscrepanciesSyllabusData,
  type AssigningSyllabusPageData,
  type AssigningSyllabusData
};
