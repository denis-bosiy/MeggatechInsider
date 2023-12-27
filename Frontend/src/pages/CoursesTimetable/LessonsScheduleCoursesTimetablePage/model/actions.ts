enum LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS {
  DELETE_COURSE = "LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS_DELETE_COURSE"
}

type ActionDeleteCourse = {
  type: LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS.DELETE_COURSE;
  payload: string;
};

type Action = ActionDeleteCourse;

const ActionBuilder = {
  deleteCourse: (courseId: string) => ({
    type: LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS.DELETE_COURSE,
    payload: courseId
  })
};

export {
  LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
