type TeacherGuidebookTimetablePageData = Array<TeacherGuidebookTimetableData>

type AvailableHours = {
  weekDay: string,
  dayTime: string,
}

type TeacherGuidebookTimetableData = {
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
