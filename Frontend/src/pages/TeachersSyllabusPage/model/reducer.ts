import { Action, TEACHERS_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { TeachersSyllabusPageData } from "./types";

const initData: TeachersSyllabusPageData = [
  {
    id: 0,
    name: "Иванов Иван Иванович",
    category: "Высшая категория",
    categoryPayrollAccounting: true,
    workingContract: "ГПХ",
    workingContractPayrollAccounting: false,
    education: "Степень к.н.",
    isClassroomTeacher: false,
    inDepthSubjectPayrollAccounting: false,
    finalExamPayrollAccounting: false,
    workingStartDate: "08.10.2023",
    workExperience: 15,
    workExperienceAtTheTimeOfTheEmployment: 2,
    birthDay: "11.07.1992",
    age: 45
  },
  {
    id: 1,
    name: "Петров Иван Сергеевич",
    category: "Высшая категория",
    categoryPayrollAccounting: false,
    workingContract: "ДС",
    workingContractPayrollAccounting: true,
    education: "Степень к.н.",
    isClassroomTeacher: false,
    inDepthSubjectPayrollAccounting: true,
    finalExamPayrollAccounting: false,
    workingStartDate: "18.01.2023",
    workExperience: 7,
    workExperienceAtTheTimeOfTheEmployment: 2,
    birthDay: "11.07.2002",
    age: 30
  },
];

const teachersSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_CATEGORY_PAYROLL_ACCOUNTING:
      return state.map((item) =>
        item.id === action.payload.teacherId ? { ...item, categoryPayrollAccounting: action.payload.categoryPayrollAccounting } : item
      );
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_WORKING_CONTRACT_PAYROLL_ACCOUNTING:
      return state.map((item) =>
        item.id === action.payload.teacherId ? { ...item, workingContractPayrollAccounting: action.payload.workingContractPayrollAccounting } : item
      );
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IS_CLASSROOM_TEACHER:
      return state.map((item) =>
        item.id === action.payload.teacherId ? { ...item, isClassroomTeacher: action.payload.isClassroomTeacher } : item
      );
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IN_DEPTH_SUBJECT_PAYROLL_ACCOUNTING:
      return state.map((item) =>
        item.id === action.payload.teacherId ? { ...item, inDepthSubjectPayrollAccounting: action.payload.inDepthSubjectPayrollAccounting } : item
      );
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_FINAL_EXAM_PAYROLL_ACCOUNTING:
      return state.map((item) =>
        item.id === action.payload.teacherId ? { ...item, finalExamPayrollAccounting: action.payload.finalExamPayrollAccounting } : item
      );
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_DELETE_TEACHER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export { teachersSyllabusPageReducer };
