import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/SubjectsSyllabusPage/model/reducer";
import { teacherGuidebookTimetablePageReducer } from "../pages/TeacherGuidebookTimetablePage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
});
