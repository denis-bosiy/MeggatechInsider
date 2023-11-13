enum TEACHERS_SYLLABUS_PAGE_ACTIONS {
  TEACHERS_SYLLABUS_PAGE_SET_CATEGORY_PAYROLL_ACCOUNTING = "TEACHERS_SYLLABUS_PAGE_SET_CATEGORY_PAYROLL_ACCOUNTING",
  TEACHERS_SYLLABUS_PAGE_SET_WORKING_CONTRACT_PAYROLL_ACCOUNTING = "TEACHERS_SYLLABUS_PAGE_SET_WORKING_CONTRACT_PAYROLL_ACCOUNTING",
  TEACHERS_SYLLABUS_PAGE_SET_IS_CLASSROOM_TEACHER = "TEACHERS_SYLLABUS_PAGE_SET_IS_CLASSROOM_TEACHER",
  TEACHERS_SYLLABUS_PAGE_SET_IN_DEPTH_SUBJECT_PAYROLL_ACCOUNTING = "TEACHERS_SYLLABUS_PAGE_SET_IN_DEPTH_SUBJECT_PAYROLL_ACCOUNTING",
  TEACHERS_SYLLABUS_PAGE_SET_FINAL_EXAM_PAYROLL_ACCOUNTING = "TEACHERS_SYLLABUS_PAGE_SET_FINAL_EXAM_PAYROLL_ACCOUNTING",
  TEACHERS_SYLLABUS_PAGE_DELETE_TEACHER = "TEACHERS_SYLLABUS_PAGE_DELETE_TEACHER",
}

type ActionSetCategoryPayrollAccounting = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_CATEGORY_PAYROLL_ACCOUNTING,
  payload: {teacherId: number, categoryPayrollAccounting: boolean},
}

type ActionSetWorkingContractPayrollAccounting = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_WORKING_CONTRACT_PAYROLL_ACCOUNTING,
  payload: {teacherId: number, workingContractPayrollAccounting: boolean},
}

type ActionSetIsClassroomTeacher = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IS_CLASSROOM_TEACHER,
  payload: {teacherId: number, isClassroomTeacher: boolean},
}

type ActionSetInDepthSubjectPayrollAccounting = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IN_DEPTH_SUBJECT_PAYROLL_ACCOUNTING,
  payload: {teacherId: number, inDepthSubjectPayrollAccounting: boolean},
}

type ActionSetFinalExamPayrollAccounting = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_FINAL_EXAM_PAYROLL_ACCOUNTING,
  payload: {teacherId: number, finalExamPayrollAccounting: boolean},
}

type ActionDeleteTeacher = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_DELETE_TEACHER,
  payload: number,
}

type Action = ActionSetCategoryPayrollAccounting | ActionSetWorkingContractPayrollAccounting |
  ActionSetIsClassroomTeacher | ActionSetInDepthSubjectPayrollAccounting |
  ActionSetFinalExamPayrollAccounting | ActionDeleteTeacher

const ActionBuilder = {
  setCategoryPayrollAccounting: (teacherId: number, categoryPayrollAccounting: boolean) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_CATEGORY_PAYROLL_ACCOUNTING,
    payload: {teacherId, categoryPayrollAccounting},
  }),
  setWorkingContractPayrollAccounting: (teacherId: number, workingContractPayrollAccounting: boolean) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_WORKING_CONTRACT_PAYROLL_ACCOUNTING,
    payload: {teacherId, workingContractPayrollAccounting},
  }),
  setIsClassroomTeacher: (teacherId: number, isClassroomTeacher: boolean) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IS_CLASSROOM_TEACHER,
    payload: {teacherId, isClassroomTeacher},
  }),
  setInDepthSubjectPayrollAccounting: (teacherId: number, inDepthSubjectPayrollAccounting: boolean) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_IN_DEPTH_SUBJECT_PAYROLL_ACCOUNTING,
    payload: {teacherId, inDepthSubjectPayrollAccounting},
  }),
  setFinalExamPayrollAccounting: (teacherId: number, finalExamPayrollAccounting: boolean) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_SET_FINAL_EXAM_PAYROLL_ACCOUNTING,
    payload: {teacherId, finalExamPayrollAccounting},
  }),
  deleteTeacher: (teacherId: number) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.TEACHERS_SYLLABUS_PAGE_DELETE_TEACHER,
    payload: teacherId,
  }),
};

export {
  TEACHERS_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
