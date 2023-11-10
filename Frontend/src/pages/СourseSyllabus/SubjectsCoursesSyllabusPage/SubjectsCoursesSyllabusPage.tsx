import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SubjectsCoursesSyllabusPageData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import "./SubjectsCoursesSyllabusPage.scss";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import Select, {ISelectOption, SelectSize} from "../../../components/Select/Select";
import IconButton, {IconButtonType} from "../../../components/IconButton/IconButton";

const SubjectsCoursesSyllabus = () => {
  const subjects = useSelector((state: {subjectsCoursesSyllabusPageStore: SubjectsCoursesSyllabusPageData}) => state.subjectsCoursesSyllabusPageStore);
  const dispatch = useDispatch();

  return (
    subjects.map((subject) => (
      <tr className="row" key={subject.id}>
        <td className="cell">{subject.name}</td>
        <td className="cell">{subject.type}</td>
        <td className="cell">{subject.hoursByPlan}</td>
        <td className="cell">{subject.numberOfGroups}</td>
        <td className="cell">
          <IconButton
            icon={<GarbageIcon />}
            onClick={() => dispatch(ActionBuilder.deleteSubject(subject.id))}
          />
        </td>
      </tr>
    ))
  );
};

const SubjectsCoursesSyllabusPage = () => {
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
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell">Курс</th>
            <th className="cell">Тип</th>
            <th className="cell">Планируемое кол-во часов</th>
            <th className="cell">Число групп</th>
          </tr>
        </thead>
        <tbody>
          {SubjectsCoursesSyllabus()}
          {isAddition &&
          <tr className="row">
            <td className="cell">
              <Input
                value={defaultInputValue}
                size={InputSize.Micro}
                placeholder="Текст"
                onValueChange={setDefaultInputValue}
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
                value={defaultInputValue}
                size={InputSize.Micro}
                placeholder="0"
                onValueChange={setDefaultInputValue}
              />
            </td>
            <td className="cell">
              <Input
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
    </>
  );
};

export default SubjectsCoursesSyllabusPage;
