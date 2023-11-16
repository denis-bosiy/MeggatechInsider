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
  availableHours: AvailableHours[],
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type TeacherGuidebookCoursesTimetablePageData = TeacherGuidebookCoursesTimetableData[]

export {
  type TeacherGuidebookCoursesTimetablePageData,
};
