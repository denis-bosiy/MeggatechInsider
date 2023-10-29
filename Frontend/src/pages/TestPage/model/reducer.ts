import {Action, TEST_PAGE_ACTIONS} from "./actions";
import {TestPageData} from "./types";

const initData: TestPageData = {
  login: "",
  password: "",
};

const testPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
  case TEST_PAGE_ACTIONS.TEST_PAGE_SET_LOGIN:
    return {
      ...state,
      login: action.payload,

    };
  case TEST_PAGE_ACTIONS.TEST_PAGE_SET_PASSWORD:
    return {
      ...state,
      password: action.payload,
    };
  case TEST_PAGE_ACTIONS.TEST_PAGE_RESET:
    return {
      ...state,
      login: "",
      password: "",
    };
  default:
    return state;
  }
};

export {
  testPageReducer,
};
