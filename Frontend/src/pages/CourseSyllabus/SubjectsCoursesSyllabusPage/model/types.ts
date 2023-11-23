type SubjectsCoursesSyllabusPageData = Array<SubjectCoursesSyllabusData>

type SubjectCoursesSyllabusData = {
  id: string,
  name: string,
  type: string,
  hoursByPlan: number,
  numberOfGroups: number
}

export {
  type SubjectsCoursesSyllabusPageData,
  type SubjectCoursesSyllabusData
};
