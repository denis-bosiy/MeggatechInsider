import {AssigningsSyllabusData} from "./types";

enum ASSIGNING_SYLLABUS_PAGE_ACTIONS {
  SAVE_ASSIGNING = "SAVE_ASSIGNING",
}

type ActionSaveAssigning = {
  type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING,
  payload: AssigningsSyllabusData,
}

type Action = ActionSaveAssigning

const ActionBuilder = {
  saveAssigning: (values: AssigningsSyllabusData) => ({
    type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING,
    payload: { values }
  }),
};

export {
  ASSIGNING_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
