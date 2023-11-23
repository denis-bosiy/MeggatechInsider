type GroupData = {
  id: number,
  name: string,
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type GroupGuidebookCoursesTimetableData = {
  id: number,
  name: string,
  type: string,
  groups: GroupData[],
}

type GroupGuidebookCoursesTimetablePageData = GroupGuidebookCoursesTimetableData[]

export {
  type GroupGuidebookCoursesTimetablePageData,
};
