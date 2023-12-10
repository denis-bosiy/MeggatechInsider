type GroupData = {
  id: number,
  name: string,
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type LessonsScheduleCoursesTimetableData = {
  id: number,
  name: string,
  type: string,
  groups: GroupData[],
}

type LessonsScheduleCoursesTimetablePageData = LessonsScheduleCoursesTimetableData[]

export {
  type LessonsScheduleCoursesTimetablePageData,
};
