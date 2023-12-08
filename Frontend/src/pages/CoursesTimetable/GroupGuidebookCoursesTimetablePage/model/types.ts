type GroupData = {
  id: string,
  name: string,
  distributedHoursToPlan: number,
  hoursToPlan: number,
  creditHours: number,
}

type GroupGuidebookCoursesTimetableData = {
  id: string,
  name: string,
  type: string,
  groups: GroupData[],
}

type GroupGuidebookCoursesTimetablePageData = GroupGuidebookCoursesTimetableData[]

export {
  type GroupGuidebookCoursesTimetablePageData,
};
