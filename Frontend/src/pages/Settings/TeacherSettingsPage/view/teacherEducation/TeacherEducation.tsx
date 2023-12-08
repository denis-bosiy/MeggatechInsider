import React, { useContext, useState } from "react";
import ActionButton, { ActionButtonType } from "../../../../../components/ActionButton/ActionButton";
import { PlusIcon } from "../../../../../icons";
import CommonContent from "../common/CommonContent";
import TeacherEducationTable from "./table/TeacherEducationTable";
import { useDispatch, useSelector } from "react-redux";
import { TeacherEducationActionBuilder } from "./model/actions";
import { TeacherEducationItem } from "./model/types";
import { CTableBuilder } from "../../../../../core/Table/CTableBuilder";
import { CTable } from "../../../../../core/Table/CTable";
import { CTableManager } from "../../../../../core/Table/CTableManager";
import { TableType } from "../../../../../core/Table/TableType";
import { guidGenerator } from "../../../../../utils/guidGenerator";
import ModalSettingsContext from "../../../../../utils/ModalSettingsContext";
import { SortingOrder } from "../../../../../core/Table/SortingOrder";

const TeacherEducation = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const items = useSelector((state: { teacherEducationStore: TeacherEducationItem[] }) => state.teacherEducationStore);
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState<{ value: boolean }>({ value: false });
  const [tableData, setTableData] = useState<TeacherEducationItem[]>(structuredClone(items));
  const tableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  tableBuilder.addManageFeature(isAdding, setIsAdding);
  const table: CTable = tableBuilder.getTable();
  const tableManager: CTableManager = new CTableManager(table);

  const handleDeleteRow = (id: string): void => {
    tableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TeacherEducationActionBuilder.setItems(data)),
      openModal
    ]);
  };
  const handleAdding = (): void => {
    tableManager.invokeFunction("add", TableType.Managable, [{ id: guidGenerator(), name: "", coefficient: 0 }]);
  };
  const handleApplying = (): void => {
    tableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TeacherEducationActionBuilder.setItems(data))
    ]);
  };
  const handleSort = (columnName: string): void => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <CommonContent
      button={
        <ActionButton label="Добавить" type={ActionButtonType.Warning} icon={<PlusIcon />} onClick={handleAdding} />
      }
      table={
        <TeacherEducationTable
          items={tableData}
          handleDeleteRow={handleDeleteRow}
          isAdding={isAdding.value}
          handleApplying={handleApplying}
          setItems={setTableData}
          handleSort={handleSort}
        />
      }
    />
  );
};

export default TeacherEducation;
