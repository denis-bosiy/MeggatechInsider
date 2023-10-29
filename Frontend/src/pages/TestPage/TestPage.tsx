import React from "react";
import "./TestPage.scss";
import {useDispatch, useSelector} from "react-redux";
import {TestPageData} from "./model/types";
import {ActionBuilder} from "./model/actions";

const TestPage = () => {
  const login = useSelector((state: {testPageStore: TestPageData}) => state.testPageStore.login);
  const password = useSelector((state: {testPageStore: TestPageData}) => state.testPageStore.password);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={login}
        onChange={event => {
          dispatch(ActionBuilder.setLogin(event.target.value));
        }}
        placeholder={"login"}
      />
      <input
        type="text"
        value={password}
        onChange={event => {
          dispatch(ActionBuilder.setPassword(event.target.value));
        }}
        placeholder={"password"}
      />
      <button onClick={() => {
        console.log("Данные в store: `" + login + "` и `" + password + "`");
      }}>
        Отправить
      </button>
      <button onClick={() => {
        dispatch(ActionBuilder.reset());
      }}>
        Сбросить
      </button>
    </div>
  );
};

export default TestPage;
