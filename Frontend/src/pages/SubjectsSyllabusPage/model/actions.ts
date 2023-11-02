enum SUBJECTS_SYLLABUS_PAGE_ACTIONS {
  SUBJECTS_SYLLABUS_PAGE_SET_IS_FINAL_EXAM = "SUBJECTS_SYLLABUS_PAGE_SET_IS_FINAL_EXAM",
  SUBJECTS_SYLLABUS_PAGE_DELETE_SUBJECT = "SUBJECTS_SYLLABUS_PAGE_DELETE_SUBJECT",
}

type ActionSetIsFinalExam = {
  type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_SET_IS_FINAL_EXAM,
  payload: boolean,
}

type ActionDeleteSubject = {
  type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_DELETE_SUBJECT,
  payload: number,
}

type Action = ActionSetIsFinalExam | ActionDeleteSubject

const ActionBuilder = {
  setIsFinalExam: (subjectId: number, isFinalExam: boolean) => ({
    type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_SET_IS_FINAL_EXAM,
    payload: {subjectId, isFinalExam},
  }),
  deleteSubject: (id: number) => ({
    type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_DELETE_SUBJECT,
    payload: id,
  }),
};

export {
  SUBJECTS_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
