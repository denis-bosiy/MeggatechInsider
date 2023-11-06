type AssigningsCoursesSyllabusData = Array<AssigningCoursesSyllabusData>
type DiscrepanciesCoursesSyllabusData = Array<DiscrepancyCoursesSyllabusData>

type AssigningCoursesSyllabusData = {
  id: number,
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

type DiscrepancyCoursesSyllabusData = {
  id: number,
  name: string,
  groupCount: number,
  groupCountByPlan: number
}

type AssigningCoursesSyllabusPageData = {
  assignings: AssigningsCoursesSyllabusData,
  discrepancies: DiscrepanciesCoursesSyllabusData
}

export {
  type AssigningsCoursesSyllabusData,
  type DiscrepanciesCoursesSyllabusData,
  type AssigningCoursesSyllabusPageData
};
