type TeacherGuidebookTimetablePageData = {
  guidebook: Guidebook,
  availableHours: AvailableHours,
}

type AvailableHours = Array<AvailableHour>

type Guidebook = Array<TeacherGuidebookTimetableData>

type AvailableHour = {
  id: string,
  weekDay: string,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookTimetableData = {
    id: string,
    subjectName: string,
    subjectId: string,
    teacherName: string,
    teacherId: string, 
  //availableHours: AvailableHours,
    availableHours: AvailableHour,
    distributedHoursToPlan: number,
    hoursToPlan: number,
    creditHours: number,
    workedOverPlan: number,
}

export {
  type TeacherGuidebookTimetablePageData,
  type AvailableHours,
  type Guidebook,
  type TeacherGuidebookTimetableData,
};
