import {TeacherGuidebookCoursesTimetablePageData} from "./types";

export enum TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS {
  SAVE_DATA = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SAVE_DATA",
}

export type ActionSaveData = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SAVE_DATA;
  payload: TeacherGuidebookCoursesTimetablePageData[];
};

export type TeacherGuidebookCoursesTimetableAction = ActionSaveData;

export const TeacherGuidebookCoursesTimetableActionBuilder = {
  saveData: (values: TeacherGuidebookCoursesTimetablePageData[]) => ({
    type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SAVE_DATA,
    payload: values,
  }),
};
