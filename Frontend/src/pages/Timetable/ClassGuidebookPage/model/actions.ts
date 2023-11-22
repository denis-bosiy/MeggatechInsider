import { Guidebook } from "./types";

export enum TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS {
  SAVE_AVAILABLE_HOURS = "SAVE_AVAILABLE_HOURS",
}

export type ActionSaveAvailableHours = {
  type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SAVE_AVAILABLE_HOURS;
  payload: Guidebook;
};

export type TeacherGuidebookTimetableAction = ActionSaveAvailableHours;

export const TeacherGuidebookTimetableActionBuilder = {
  saveAvailableHours: (values: Guidebook) => ({
    type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SAVE_AVAILABLE_HOURS,
    payload: { values }
  }),
};
