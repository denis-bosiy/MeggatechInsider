import { AssigningsSyllabusData, DiscrepanciesSyllabusData } from "./types";

enum ASSIGNING_SYLLABUS_PAGE_ACTIONS {
  SAVE_ASSIGNING = "SAVE_ASSIGNING",
  SAVE_DISCREPANCIES = "SAVE_DISCREPANCIES"
}

type ActionSaveAssigning = {
  type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING;
  payload: AssigningsSyllabusData;
};

type ActionSaveDiscrepancies = {
  type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_DISCREPANCIES;
  payload: DiscrepanciesSyllabusData;
};

type Action = ActionSaveAssigning | ActionSaveDiscrepancies;

const ActionBuilder = {
  saveAssigning: (values: AssigningsSyllabusData) => ({
    type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING,
    payload: { values }
  }),
  saveDiscrepancies: (values: DiscrepanciesSyllabusData) => ({
    type: ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_DISCREPANCIES,
    payload: { values }
  })
};

export { ASSIGNING_SYLLABUS_PAGE_ACTIONS, type Action, ActionBuilder };
