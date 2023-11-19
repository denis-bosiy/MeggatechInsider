type TeachersCoursesSyllabusPageData = Array<TeacherCoursesSyllabusData>

type TeacherCoursesSyllabusData = {
  id: string,
  name: string,
  workingContract: string,
  workingStartDate: string,
  workExperience: number,
  workExperienceAtTheTimeOfTheEmployment: number,
  birthDay: string,
  age: number
}

export {
  type TeachersCoursesSyllabusPageData,
  type TeacherCoursesSyllabusData
};
