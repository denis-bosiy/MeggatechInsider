type TeacherGuidebookTimetablePageData = {
  availableHours: AvailableHours,
  guidebook: Guidebook
}

type AvailableHours = Array<AvailableHour>

type Guidebook = Array<TeacherGuidebookTimetableData>

type AvailableHour = {
  id: string,
  weekDayCode: number,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookTimetableData = {
    id: string,
    subjectName: string,
    subjectId: string,
    teacherName: string,
    teacherId: string,
    availableHours: AvailableHour[],
    distributedHoursToPlan: number,
    hoursToPlan: number,
    creditHours: number,
    workedOverPlan: number,
}

export {
  type TeacherGuidebookTimetablePageData,
  type AvailableHour,
  type AvailableHours,
  type Guidebook,
  type TeacherGuidebookTimetableData,
};
