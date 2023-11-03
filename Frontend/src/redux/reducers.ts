import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/TeachersSyllabusPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
});
