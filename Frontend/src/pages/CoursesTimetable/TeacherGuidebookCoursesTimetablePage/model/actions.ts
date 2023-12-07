import {TeacherGuidebookCoursesTimetableData, TeacherGuidebookCoursesTimetablePageData} from "./types";

enum TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS {
  SET_DATA = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SET_DATA",
  SET_AVAILABLE_TIME = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SET_AVAILABLE_TIME",
}

type ActionSetData = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA;
  payload: TeacherGuidebookCoursesTimetablePageData[];
};

type ActionSetAvailableTime = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_TIME;
  payload: TeacherGuidebookCoursesTimetablePageData[];
};

type TeacherGuidebookCoursesTimetableAction = ActionSetData | ActionSetAvailableTime;

const TeacherGuidebookCoursesTimetableActionBuilder = {
  saveData: (values: TeacherGuidebookCoursesTimetableData[]) => ({
    type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA,
    payload: values,
  }),
};

export {
  type TeacherGuidebookCoursesTimetableAction,
  TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS,
  TeacherGuidebookCoursesTimetableActionBuilder,
};
