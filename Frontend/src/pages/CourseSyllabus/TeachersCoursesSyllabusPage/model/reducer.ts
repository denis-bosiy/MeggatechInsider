import { Action, TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { TeachersCoursesSyllabusPageData } from "./types";

const initData: TeachersCoursesSyllabusPageData = [
  {
    id: "0",
    name: "Иванов Иван Иванович",
    workingContract: "ГПХ",
    workingStartDate: "08.10.2023",
    workExperience: 15,
    workExperienceAtTheTimeOfTheEmployment: 2,
    birthDay: "11.07.1992",
    age: 45
  },
  {
    id: "1",
    name: "Петров Иван Сергеевич",
    workingContract: "ДС",
    workingStartDate: "18.01.2023",
    workExperience: 7,
    workExperienceAtTheTimeOfTheEmployment: 2,
    birthDay: "11.07.2002",
    age: 30
  }
];

const teachersCoursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return action.payload.values;
    default:
      return state;
  }
};

export { teachersCoursesSyllabusPageReducer };
