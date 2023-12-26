import { AdditionalLoad, Teacher } from "./types";

enum YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS {
  SET_DATES = "SET-DATES",
  SET_TEACHERS = "SET-TEACHERS",
  DELETE_ADDITIONAL_LOAD = "DELETE-ADDITIONAL-LOAD",
  SAVE_ADDITIONAL_LOAD = "SAVE-ADDITIONAL-LOAD"
}

type ActionSetDates = {
  type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_DATES;
  payload: string[];
};

type ActionSetTeachers = {
  type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_TEACHERS;
  payload: Teacher[];
};

type AddAdditionaLoadPayload = {
  additionalLoad: AdditionalLoad;
  teacherId: string;
};

type ActionSaveAdditionalLoad = {
  type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SAVE_ADDITIONAL_LOAD;
  payload: AddAdditionaLoadPayload;
};

type DeleteAdditionalLoadPayload = {
  additionalLoadId: string;
  teacherId: string;
};

type ActionDeleteAdditionalLoad = {
  type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.DELETE_ADDITIONAL_LOAD;
  payload: DeleteAdditionalLoadPayload;
};

type Action = ActionSetDates | ActionSetTeachers | ActionSaveAdditionalLoad | ActionDeleteAdditionalLoad;

const ActionBuilder = {
  setDates: (values: string[]) => ({
    type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_DATES,
    payload: values
  }),
  setTeachers: (values: Teacher[]) => ({
    type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_TEACHERS,
    payload: values
  }),
  deleteAdditionalLoad: (deleteAdditionalLoadPayload: DeleteAdditionalLoadPayload) => ({
    type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.DELETE_ADDITIONAL_LOAD,
    payload: deleteAdditionalLoadPayload
  }),
  addAdditionalLoad: (addAdditionalLoadPayload: AddAdditionaLoadPayload) => ({
    type: YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SAVE_ADDITIONAL_LOAD,
    payload: addAdditionalLoadPayload
  })
};

export { YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS, type Action, ActionBuilder };
