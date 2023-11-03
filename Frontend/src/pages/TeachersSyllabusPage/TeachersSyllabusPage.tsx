import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TeachersSyllabusPageData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import "./TeachersSyllabusPage.scss";
import Input, {InputSize, InputType} from "../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../icons";
import Select, {ISelectOption, SelectSize} from "../../components/Select/Select";
import {CheckBox} from "../../components/CheckBox/CheckBox";
import IconButton, {IconButtonType} from "../../components/IconButton/IconButton";
import {SubjectsSyllabusPageData} from "../SubjectsSyllabusPage/model/types";

const TeachersSyllabusPage = () => {
  const teachers = useSelector((state: {teachersSyllabusPageStore: TeachersSyllabusPageData}) => state.teachersSyllabusPageStore);
  const dispatch = useDispatch();

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
            <th className="cell">Категория</th>
            <th className="cell">Учет в зп</th>
            <th className="cell">Договор</th>
            <th className="cell">Учет в зп</th>
            <th className="cell">Образование</th>
            <th className="cell">Класс.<br />рук-во</th>
            <th className="cell">Учет углуб. в зп</th>
            <th className="cell">Учет ЕГЭ в зп</th>
            <th className="cell">Дата<br />начала<br />работы</th>
            <th className="cell">Стаж, лет</th>
            <th className="cell">Стаж на момент устр-ва</th>
            <th className="cell">Дата<br />рождения</th>
            <th className="cell">Возраст, лет</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr className="row" key={teacher.id}>
              <td className="cell">{teacher.name}</td>
              <td className="cell">{teacher.category}</td>
              <td className="cell">
                <CheckBox
                  checked={teacher.categoryPayrollAccounting}
                  onChange={(event) => dispatch(ActionBuilder.setCategoryPayrollAccounting(teacher.id, event))}
                />
              </td>
              <td className="cell">{teacher.workingContract}</td>
              <td className="cell">
                <CheckBox
                  checked={teacher.workingContractPayrollAccounting}
                  onChange={(event) => dispatch(ActionBuilder.setWorkingContractPayrollAccounting(teacher.id, event))}
                />
              </td>
              <td className="cell">{teacher.education}</td>
              <td className="cell">
                <CheckBox
                  checked={teacher.isClassroomTeacher}
                  onChange={(event) => dispatch(ActionBuilder.setIsClassroomTeacher(teacher.id, event))}
                />
              </td>
              <td className="cell">
                <CheckBox
                  checked={teacher.inDepthSubjectPayrollAccounting}
                  onChange={(event) => dispatch(ActionBuilder.setInDepthSubjectPayrollAccounting(teacher.id, event))}
                />
              </td>
              <td className="cell">
                <CheckBox
                  checked={teacher.finalExamPayrollAccounting}
                  onChange={(event) => dispatch(ActionBuilder.setFinalExamPayrollAccounting(teacher.id, event))}
                />
              </td>
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
            </tr>
          ))}
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
              <CheckBox />
            </td>
            <td className="cell">
              <Select
                options={selectOptions}
                onValueChange={setSelectValue}
                size={SelectSize.Micro}
              />
            </td>
            <td className="cell">
              <CheckBox />
            </td>
            <td className="cell">
              <Select
                options={selectOptions}
                onValueChange={setSelectValue}
                size={SelectSize.Micro}
              />
            </td>
            <td className="cell">
              <CheckBox />
            </td>
            <td className="cell">
              <CheckBox />
            </td>
            <td className="cell">
              <CheckBox />
            </td>
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
            <td className="cell">
              <Input
                value={defaultInputValue}
                size={InputSize.Micro}
                placeholder="Текст"
                onValueChange={setDefaultInputValue}
              />
            </td>
            <td className="cell">
              <IconButton icon={<CheckMarkIcon />} type={IconButtonType.Secondary} />
            </td>
          </tr>}
        </tbody>
      </table>
    </>
  );
};

export default TeachersSyllabusPage;
