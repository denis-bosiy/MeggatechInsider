type SubjectsCoursesSyllabusPageData = Array<SubjectCoursesSyllabusData>

type SubjectCoursesSyllabusData = {
  id: number,
  name: string,
  type: string,
  hoursByPlan: number,
  numberOfGroups: number
}

export {
  type SubjectsCoursesSyllabusPageData,
};
