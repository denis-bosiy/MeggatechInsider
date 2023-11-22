import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SubjectsSyllabusPageData, SubjectSyllabusData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import Select, {ISelectOption, SelectSize} from "../../../components/Select/Select";
import {CheckBox} from "../../../components/CheckBox/CheckBox";
import IconButton, {IconButtonType} from "../../../components/IconButton/IconButton";
import {CTableBuilder} from "../../../core/Table/CTableBuilder";
import {CTable} from "../../../core/Table/CTable";
import {CTableManager} from "../../../core/Table/CTableManager";
import {TableType} from "../../../core/Table/TableType";
import {guidGenerator} from "../../../utils/guidGenerator";
import {SortingOrder} from "../../../core/Table/SortingOrder";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";

const SyllabusPage = () => {
  const financingOptions: ISelectOption[] = [
    { id: "1", content: "Бюджет" },
    { id: "2", content: "Внебюджет" },
  ];
  const typeOptions: ISelectOption[] = [
    { id: "1", content: "Обязательный проф." },
    { id: "2", content: "Необязательный проф." },
  ];
  const categoryOptions: ISelectOption[] = [
    { id: "1", content: "Физ." },
    { id: "2", content: "Ист." },
  ];

  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const subjects = useSelector((state: {subjectsSyllabusPageStore: SubjectsSyllabusPageData}) => state.subjectsSyllabusPageStore);
  const [isSubjectsEditing, setIsSubjectsEditing] = useState<{ value: boolean }>({ value: false });
  const [isSubjectsAdding, setIsSubjectsAdding] = useState<{ value: boolean }>({ value: false });
  const [subjectsTableData, setSubjectsTableData] = useState<SubjectsSyllabusPageData>(structuredClone(subjects));
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>("");
  const subjectsTableBuilder: CTableBuilder = new CTableBuilder(subjectsTableData, setSubjectsTableData);
  subjectsTableBuilder.addEditFeature(isSubjectsEditing, setIsSubjectsEditing);
  subjectsTableBuilder.addManageFeature(isSubjectsAdding, setIsSubjectsAdding);
  subjectsTableBuilder.addSearchFeature();
  const subjectsTable: CTable = subjectsTableBuilder.getTable();
  const subjectsTableManager: CTableManager = new CTableManager(subjectsTable);

  const handleSaveSubjects = () => {
    subjectsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data))
    ]);
  };
  const handleResetSubjects = () => {
    subjectsTableManager.invokeFunction("cancel", TableType.Editable, [subjects]);
  };
  const editSubjects = (): void => {
    subjectsTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleAddingSubjects = (): void => {
    subjectsTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        subjectName: "",
        financing: financingOptions[0].content,
        type: typeOptions[0].content,
        category: categoryOptions[0].content,
        surchargeForNotebooks: 0,
        numberOf10: 0,
        numberOfGroupsIn10: 0,
        numberOf11: 0,
        numberOfGroupsIn11: 0,
        isFinalExam: false
      }
    ]);
  };
  const handleApplyingNewSubject = (): void => {
    subjectsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data))
    ]);
  };
  const handleSubjectSearch = (): void => {
    subjectsTableManager.invokeFunction("search", TableType.Searchable, [
      subjectSearchQuery,
      subjects
    ]);
  };
  const handleSort = (columnName: string): void => {
    subjectsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteSubject = (id: string): void => {
    subjectsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data)),
      openModal
    ]);
  };

  return (
    <>
      <div className="toolbar -fill">
        <div className="toolbar__buttons-wrapper">
          {isSubjectsEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveSubjects}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetSubjects}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editSubjects}
            />
          )}
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={subjectSearchQuery}
          onValueChange={setSubjectSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSubjectSearch}
        />
      </div>
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell" colSpan={9}>
              &nbsp;
            </th>
            <th className="cell" colSpan={11}>
              1 четверть
            </th>
            <th className="cell" colSpan={9}>
              2 четверть
            </th>
            <th className="cell" colSpan={9}>
              3 четверть
            </th>
            <th className="cell" colSpan={10}>
              4 четверть
            </th>
            <th className="cell" colSpan={3}>
              &nbsp;
            </th>
          </tr>
          <tr className="row">
            <th className="cell -filter">Предмет</th>
            <th className="cell -filter">Б/Бв</th>
            <th className="cell -filter">Тип</th>
            <th className="cell -filter -vertical">Ч. групп</th>
            <th className="cell -filter -vertical">Ср. в год</th>
            <th className="cell -filter -vertical">Ср. в период</th>
            <th className="cell -filter -vertical">Ч. всего</th>
            <th className="cell -filter -vertical">Ч. ожидается</th>
            <th className="cell -filter -vertical">Ч. по плану</th>
            <th className="cell -vertical">7 сент. №1</th>
            <th className="cell -vertical">14 сент. №2</th>
            <th className="cell -vertical">21 сент. №3</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell">&nbsp;</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell">&nbsp;</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell">&nbsp;</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">№4</th>
            <th className="cell -vertical">24 мая №35</th>
            <th className="cell">&nbsp;</th>
            <th className="cell -filter">Ч. 1 пг.</th>
            <th className="cell -filter">Ч. 2 пг.</th>
            <th className="cell -vertical">Продолжить<br/>по первым<br/>2 неделям</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell">Физика</td>
            <td className="cell">Бюджет</td>
            <td className="cell">Обязательный профильный</td>
            <td className="cell">3</td>
            <td className="cell">12</td>
            <td className="cell">14</td>
            <td className="cell -error">105</td>
            <td className="cell">105</td>
            <td className="cell">105</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell" title="Очистить четверть">
              del
            </td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell" title="Очистить четверть">
              del
            </td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell" title="Очистить четверть">
              del
            </td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell" title="Очистить четверть">
              del
            </td>
            <td className="cell">1000</td>
            <td className="cell">5000</td>
            <td className="cell">
              <button>Авто</button>
            </td>
          </tr>
          <tr>
            <td className="cell" colSpan={9}>Физика</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell"></td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell"></td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell"></td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell">12</td>
            <td className="cell"></td>
            <td className="cell">1000</td>
            <td className="cell">5000</td>
            <td className="cell"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SyllabusPage;
