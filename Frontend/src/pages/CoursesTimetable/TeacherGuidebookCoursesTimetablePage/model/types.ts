type AvailableHours = {
  id: number,
  weekDay: string,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookCoursesTimetableData = {
  id: number,
  course: string,
  type: string,
  teacherName: string,
  teacherId: number,
  availableHours: Array<AvailableHours>,
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type TeacherGuidebookCoursesTimetablePageData = Array<TeacherGuidebookCoursesTimetableData>

export {
  type TeacherGuidebookCoursesTimetablePageData,
};
