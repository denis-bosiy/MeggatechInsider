import {SyllabusData} from "./types";

enum SYLLABUS_PAGE_ACTIONS {
  SAVE_SYLLABUS = "SAVE_SYLLABUS",
}

type ActionSaveSyllabus = {
  type: SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS,
  payload: SyllabusData,
}

type Action = ActionSaveSyllabus

const ActionBuilder = {
  saveSyllabus: (values: SyllabusData) => ({
    type: SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS,
    payload: { values }
  }),
};

export {
  SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
