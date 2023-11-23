type AssigningsCoursesSyllabusData = Array<AssigningCoursesSyllabusData>
type DiscrepanciesCoursesSyllabusData = Array<DiscrepancyCoursesSyllabusData>

type AssigningCoursesSyllabusData = {
  id: string,
  name: string,
  teacher: string,
  groupCount: number,
  hoursOnWeek: number,
  hoursOnYear: number,
  costPerHour: number,
}

type DiscrepancyCoursesSyllabusData = {
  id: string,
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
  type AssigningCoursesSyllabusPageData,
  type AssigningCoursesSyllabusData
};
