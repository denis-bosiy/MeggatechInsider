type AvailableTime = {
  id: string,
  weekDay: string,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookCoursesTimetableData = {
  id: string,
  course: string,
  type: string,
  teacherName: string,
  teacherId: string,
  availableTime: string[],
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type TeacherGuidebookCoursesTimetablePageData = {
  availableTime: AvailableTime[],
  data: TeacherGuidebookCoursesTimetableData[],
}

export {
  type AvailableTime,
  type TeacherGuidebookCoursesTimetableData,
  type TeacherGuidebookCoursesTimetablePageData,
};
