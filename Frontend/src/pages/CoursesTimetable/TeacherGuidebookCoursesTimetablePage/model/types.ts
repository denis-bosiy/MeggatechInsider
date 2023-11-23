type AvailableTime = {
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
  availableTime: AvailableTime[],
  selectedTime: number[],
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type TeacherGuidebookCoursesTimetablePageData = TeacherGuidebookCoursesTimetableData[]

export {
  type TeacherGuidebookCoursesTimetableData,
  type TeacherGuidebookCoursesTimetablePageData,
};
