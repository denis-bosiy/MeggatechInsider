type TeacherGuidebookTimetablePageData = Array<TeacherGuidebookTimetableData>

type AvailableHours = {
  id: number,
  weekDay: string,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookTimetableData = {
    id: number,
    subjectName: string,
    subjectId: number,
    teacherName: string,
    teacherId: number, 
    availableHours: Array<AvailableHours>,
    distributedHoursToPlan: number,
    hoursToPlan: number,
    creditHours: number,
    workedOverPlan: number,
}

export {
  type TeacherGuidebookTimetablePageData,
};
