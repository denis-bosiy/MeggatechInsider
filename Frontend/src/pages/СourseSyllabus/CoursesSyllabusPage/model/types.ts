type CoursesSyllabusSubject = {
  id: string,
  name: string,
  type: string;
  groupsCount: number;
  hoursTotal: number;
  hoursAwaited: number;
  hoursPlanned: number;
  weeksPlan: number[];
}

type CoursesSyllabusPageData = {
  subjects: CoursesSyllabusSubject[];
  weekStartDates: string[];
}

export {
  type CoursesSyllabusSubject,
  type CoursesSyllabusPageData,
};
