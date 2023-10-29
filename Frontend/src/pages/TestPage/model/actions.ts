enum TEST_PAGE_ACTIONS {
  TEST_PAGE_SET_LOGIN = "TEST_PAGE_SET_LOGIN",
  TEST_PAGE_SET_PASSWORD = "TEST_PAGE_SET_PASSWORD",
  TEST_PAGE_RESET = "TEST_PAGE_RESET",
}

type ActionSetLogin = {
  type: TEST_PAGE_ACTIONS.TEST_PAGE_SET_LOGIN,
  payload: string,
}

type ActionSetPassword = {
  type: TEST_PAGE_ACTIONS.TEST_PAGE_SET_PASSWORD,
  payload: string,
}

type ActionReset = {
  type: TEST_PAGE_ACTIONS.TEST_PAGE_RESET,
}

type Action = ActionSetLogin | ActionSetPassword | ActionReset

const ActionBuilder = {
  setLogin: (login: string) => ({
    type: TEST_PAGE_ACTIONS.TEST_PAGE_SET_LOGIN,
    payload: login,
  }),
  setPassword: (password: string) => ({
    type: TEST_PAGE_ACTIONS.TEST_PAGE_SET_PASSWORD,
    payload: password,
  }),
  reset: () => ({
    type: TEST_PAGE_ACTIONS.TEST_PAGE_RESET,
  }),
};

export {
  TEST_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
