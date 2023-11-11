type TeachersCoursesSyllabusPageData = Array<TeacherCoursesSyllabusData>

type TeacherCoursesSyllabusData = {
  id: number,
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
};
