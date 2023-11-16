import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TeachersCoursesSyllabusPageData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import Select, {ISelectOption, SelectSize} from "../../../components/Select/Select";
import IconButton, {IconButtonType} from "../../../components/IconButton/IconButton";

const TeachersCoursesSyllabus = () => {
  const teachers = useSelector((state: {teachersCoursesSyllabusPageStore: TeachersCoursesSyllabusPageData}) => state.teachersCoursesSyllabusPageStore);
  const dispatch = useDispatch();

  return (
    teachers.map((teacher) => (
      <tr className="row" key={teacher.id}>
        <td className="cell">{teacher.name}</td>
        <td className="cell">{teacher.workingContract}</td>
        <td className="cell">{teacher.workingStartDate}</td>
        <td className="cell">{teacher.workExperience}</td>
        <td className="cell">{teacher.workExperienceAtTheTimeOfTheEmployment}</td>
        <td className="cell">{teacher.birthDay}</td>
        <td className="cell">{teacher.age}</td>
        <td className="cell">
          <IconButton
            icon={<GarbageIcon />}
            onClick={() => dispatch(ActionBuilder.deleteTeacher(teacher.id))}
          />
        </td>
      </tr>))
  );
};

const TeachersCoursesSyllabusPage = () => {
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
            <th className="cell">ФИО</th>
            <th className="cell">Договор</th>
            <th className="cell">Дата начала работы</th>
            <th className="cell">Стаж, лет</th>
            <th className="cell">Стаж на момент устр-ва</th>
            <th className="cell">Дата рождения</th>
            <th className="cell">Возраст, лет</th>
          </tr>
        </thead>
        <tbody>
          {TeachersCoursesSyllabus()}
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
                placeholder="Текст"
                onValueChange={setDefaultInputValue}
              />
            </td>
            <td className="cell"></td>
            <td className="cell">
              <Input
                value={defaultInputValue}
                size={InputSize.Micro}
                placeholder="Текст"
                onValueChange={setDefaultInputValue}
              />
            </td>
            <td className="cell">
              <Input
                value={defaultInputValue}
                size={InputSize.Micro}
                placeholder="Текст"
                onValueChange={setDefaultInputValue}
              />
            </td>
            <td className="cell"></td>
            <td className="cell">
              <IconButton icon={<CheckMarkIcon />} type={IconButtonType.Secondary} />
            </td>
          </tr>}
        </tbody>
      </table>
    </>
  );
};

export default TeachersCoursesSyllabusPage;
