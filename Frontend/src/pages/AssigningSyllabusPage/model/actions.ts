enum ASSIGNING_SYLLABUS_PAGE_ACTIONS {
  ASSIGNING_SYLLABUS_PAGE_DELETE_ASSIGNING = "ASSIGNING_SYLLABUS_PAGE_DELETE_ASSIGNING",
}

type ActionDeleteAssigning = {
  type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.ASSIGNING_SYLLABUS_PAGE_DELETE_ASSIGNING,
  payload: number,
}

type Action = ActionDeleteAssigning

const ActionBuilder = {
  deleteAssigning: (assigningId: number) => ({
    type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.ASSIGNING_SYLLABUS_PAGE_DELETE_ASSIGNING,
    payload: assigningId,
  }),
};

export {
  ASSIGNING_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
