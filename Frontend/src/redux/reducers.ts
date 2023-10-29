import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
});
