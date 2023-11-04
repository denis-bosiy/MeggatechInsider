import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/TeachersSyllabusPage/model/reducer";
import {assigningSyllabusPageReducer} from "../pages/AssigningSyllabusPage/model/reducer";
import {teacherGuidebookTimetablePageReducer} from "../pages/TeacherGuidebookTimetablePage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
  assigningSyllabusPageStore: assigningSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
});
