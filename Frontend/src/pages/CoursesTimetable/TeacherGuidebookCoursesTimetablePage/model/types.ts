type AvailableTime = {
  id: string,
  weekDayCode: number,
  startTime: string,
  endTime: string,
}

type TeacherGuidebookCoursesTimetableData = {
  id: string,
  course: string,
  type: string,
  teacherName: string,
  teacherId: string,
  availableTimes: string[],
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type TeacherGuidebookCoursesTimetablePageData = {
  availableTimes: AvailableTime[],
  data: TeacherGuidebookCoursesTimetableData[],
}

export {
  type AvailableTime,
  type TeacherGuidebookCoursesTimetableData,
  type TeacherGuidebookCoursesTimetablePageData,
};
