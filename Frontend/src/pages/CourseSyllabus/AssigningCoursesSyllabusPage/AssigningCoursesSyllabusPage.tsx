import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AssigningCoursesSyllabusPageData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import { classNames } from "../../../utils/classNames";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import Select, {ISelectOption, SelectSize} from "../../../components/Select/Select";
import IconButton, {IconButtonType} from "../../../components/IconButton/IconButton";

const AssigningCoursesSyllabus = () => {
  const data = useSelector((state: {assigningCoursesSyllabusPageStore: AssigningCoursesSyllabusPageData}) => state.assigningCoursesSyllabusPageStore);
  const assignings = data.assignings;
  const dispatch = useDispatch();

  return (
    assignings.map((assigning) => (
      <tr className="row" key={assigning.id}>
        <td className="cell">{assigning.name}</td>
        <td className="cell">{assigning.teacher}</td>
        <td className="cell">{assigning.groupCount}</td>
        <td className="cell">{assigning.hoursOnWeek}</td>
        <td className="cell">{assigning.hoursOnYear}</td>
        <td className="cell">{assigning.costPerHour}</td>
        <td className="cell">
          <IconButton
            icon={<GarbageIcon />}
            onClick={() => dispatch(ActionBuilder.deleteAssigning(assigning.id))}
          />
        </td>
      </tr>
    ))
  );
};

const DiscrepanciesCoursesSyllabus = () => {
  const data = useSelector((state: {assigningCoursesSyllabusPageStore: AssigningCoursesSyllabusPageData}) => state.assigningCoursesSyllabusPageStore);
  const discrepancies = data.discrepancies;

  return (
    discrepancies.map((discrepancy) => (
      <tr className="row" key={discrepancy.id}>
        <td className="cell">{discrepancy.name}</td>
        <td className={classNames("cell" + (discrepancy.groupCount < discrepancy.groupCountByPlan ? " -error" : "")
          + (discrepancy.groupCount > discrepancy.groupCountByPlan ? " -warning" : ""))}>{discrepancy.groupCount}</td>
      </tr>
    ))
  );
};

const AssigningCoursesSyllabusPage = () => {
  const isAddition = true;
  const [searchValue, setSearchValue] = useState<string>("");
  const [defaultInputValue, setDefaultInputValue] = useState<string>("");

  const selectOptions: ISelectOption[] = [
    { id: "test1", content: "Text 1" },
    { id: "test2", content: "Text 2" },
    { id: "test3", content: "Text 3" },
  ];
  const setSelectValue = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <ActionButton
            className="toolbar__button"
            label="Редактировать"
            icon={<PenIcon />}
            onClick={() => alert("Редактировать")}
          />
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={() => alert("Добавить")}
          />
        </div>
        <Input
          className="toolbar__search"
          value={searchValue}
          type={InputType.Search}
          placeholder="Поиск"
          onValueChange={setSearchValue}
        />
      </div>
      <div className="tables-wrapper">
        <div className="table-wrapper">
          <h2 className="h2 table-wrapper__title">Назначение</h2>
          <table className="table">
            <thead className="header">
              <tr className="row">
                <th className="cell">Курс</th>
                <th className="cell">Преподаватель</th>
                <th className="cell">Число групп</th>
                <th className="cell">Часов в неделю</th>
                <th className="cell">Часов всего</th>
                <th className="cell">Стоимость часа</th>
              </tr>
            </thead>
            <tbody>
              {AssigningCoursesSyllabus()}
              {isAddition &&
              <tr className="row">
                <td className="cell">
                  <Select
                    options={selectOptions}
                    onValueChange={setSelectValue}
                    size={SelectSize.Micro}
                  />
                </td>
                <td className="cell">
                  <Select
                    options={selectOptions}
                    onValueChange={setSelectValue}
                    size={SelectSize.Micro}
                  />
                </td>
                <td className="cell">
                  <Input
                    className="sign-in__input"
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="0"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell"></td>
                <td className="cell"></td>
                <td className="cell">
                  <Input
                    className="sign-in__input"
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="0"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell">
                  <IconButton
                    icon={<CheckMarkIcon />}
                    type={IconButtonType.Secondary}
                    onClick={() => alert("Добавить")}
                  />
                </td>
              </tr>}
            </tbody>
          </table>
        </div>

        <div className="table-wrapper">
          <h2 className="h2 table-wrapper__title">Расхождения</h2>
          <table className="table">
            <thead className="header">
              <tr className="row">
                <th className="cell">Курс</th>
                <th className="cell">Число групп</th>
              </tr>
            </thead>
            <tbody>
              {DiscrepanciesCoursesSyllabus()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssigningCoursesSyllabusPage;
