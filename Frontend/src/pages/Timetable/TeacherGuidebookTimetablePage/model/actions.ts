import { Guidebook, AvailableHours } from "./types";

export enum TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS {
  SET_TEACHERS = "SET_TEACHERS",
  SET_AVAILABLE_HOURS = "SET_AVAILABLE_HOURS"
}

export type ActionSetTeachers = {
  type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_TEACHERS;
  payload: Guidebook;
};

export type ActionSetAvailableHours = {
  type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_HOURS;
  payload: AvailableHours;
};

export type Action = ActionSetTeachers | ActionSetAvailableHours;

export const TeacherGuidebookTimetableActionBuilder = {
  setTeachers: (values: Guidebook) => ({
    type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_TEACHERS,
    payload: { values }
  }),
  setAvailableHours: (availableHours: AvailableHours) => ({
    type: TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_HOURS,
    payload: { availableHours }
  })
};
