import { combineReducers } from "redux";
import { testPageReducer } from "../pages/TestPage/model/reducer";
import { basicSettingsReducer } from "../pages/SettingsPage/model/reducer";
import { subjectsSyllabusPageReducer } from "../pages/SubjectsSyllabusPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  basicSettingsStore: basicSettingsReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
});
