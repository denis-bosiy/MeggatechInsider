import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import { timetableSettingsPageReducer } from "../pages/TimetableSettingsPage/model/reducer";


export default combineReducers({
  testPageStore: testPageReducer,
  timetableSettingsPageStore: timetableSettingsPageReducer,
});
