import React, { useContext, useState } from "react";
import ActionButton, { ActionButtonType } from "../../../../../components/ActionButton/ActionButton";
import { PlusIcon } from "../../../../../icons";
import CommonContent from "../common/CommonContent";
import TypesContractsTable from "./table/TypesContractsTable";
import { useDispatch, useSelector } from "react-redux";
import { TypesContractsActionBuilder } from "./model/actions";
import ModalSettingsContext from "../../../../../utils/ModalSettingsContext";
import { TypesContractsItem } from "./model/types";
import { CTableBuilder } from "../../../../../core/Table/CTableBuilder";
import { CTable } from "../../../../../core/Table/CTable";
import { CTableManager } from "../../../../../core/Table/CTableManager";
import { TableType } from "../../../../../core/Table/TableType";
import { guidGenerator } from "../../../../../utils/guidGenerator";
import { SortingOrder } from "../../../../../core/Table/SortingOrder";

const TypesContracts = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const items = useSelector((state: { typesContractsStore: TypesContractsItem[] }) => state.typesContractsStore);
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState<{ value: boolean }>({ value: false });
  const [tableData, setTableData] = useState<TypesContractsItem[]>(structuredClone(items));
  const tableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  tableBuilder.addManageFeature(isAdding, setIsAdding);
  const table: CTable = tableBuilder.getTable();
  const tableManager: CTableManager = new CTableManager(table);

  const handleDeleteRow = (id: string): void => {
    tableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TypesContractsActionBuilder.setItems(data)),
      openModal
    ]);
  };
  const handleAdding = (): void => {
    tableManager.invokeFunction("add", TableType.Managable, [{ id: guidGenerator(), name: "" }]);
  };
  const handleApplying = (): void => {
    tableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TypesContractsActionBuilder.setItems(data))
    ]);
  };
  const handleSort = (columnName: string): void => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <CommonContent
      button={
        <ActionButton
          label="Добавить"
          type={ActionButtonType.Warning}
          icon={<PlusIcon />}
          onClick={() => handleAdding()}
        />
      }
      table={
        <TypesContractsTable
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

export default TypesContracts;
