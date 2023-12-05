import { ClassGuidebookData } from "./types";

export enum CLASS_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS {
  SET_CLASS_GUIDEBOOK = "SET_CLASS_GUIDEBOOK"
}

export type ActionSetClassGuidebook = {
  type: CLASS_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_CLASS_GUIDEBOOK;
  payload: ClassGuidebookData;
};

export type TeacherGuidebookTimetableAction = ActionSetClassGuidebook;

export const TeacherGuidebookTimetableActionBuilder = {
  saveAvailableHours: (value: ClassGuidebookData) => ({
    type: CLASS_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_CLASS_GUIDEBOOK,
    payload: { value }
  })
};
