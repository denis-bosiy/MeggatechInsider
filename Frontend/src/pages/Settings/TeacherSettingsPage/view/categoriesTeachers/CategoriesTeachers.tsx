import React, { useContext, useState } from "react";
import ActionButton, { ActionButtonType } from "../../../../../components/ActionButton/ActionButton";
import { PlusIcon } from "../../../../../icons";
import CategoriesTeachersTable from "./table/CategoriesTeachersTable";
import CommonContent from "../common/CommonContent";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesTeachersActionBuilder } from "./model/actions";
import ModalSettingsContext from "../../../../../utils/ModalSettingsContext";
import { CategoriesTeachersItem } from "./model/types";
import { CTableBuilder } from "../../../../../core/Table/CTableBuilder";
import { CTable } from "../../../../../core/Table/CTable";
import { CTableManager } from "../../../../../core/Table/CTableManager";
import { TableType } from "../../../../../core/Table/TableType";
import { guidGenerator } from "../../../../../utils/guidGenerator";
import { SortingOrder } from "../../../../../core/Table/SortingOrder";

const CategoriesTeachers = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const items = useSelector(
    (state: { categoriesTeachersStore: CategoriesTeachersItem[] }) => state.categoriesTeachersStore
  );
  const dispatch = useDispatch();
  const [isCategoriesTeachersAdding, setIsCategoriesTeachersAdding] = useState<{ value: boolean }>({ value: false });
  const [categoriesTeachersTableData, setCategoriesTeachersTableData] = useState<CategoriesTeachersItem[]>(
    structuredClone(items)
  );
  const categoriesTeachersTableBuilder: CTableBuilder = new CTableBuilder(
    categoriesTeachersTableData,
    setCategoriesTeachersTableData
  );
  categoriesTeachersTableBuilder.addManageFeature(isCategoriesTeachersAdding, setIsCategoriesTeachersAdding);
  const categoriesTeachersTable: CTable = categoriesTeachersTableBuilder.getTable();
  const categoriesTeachersTableManager: CTableManager = new CTableManager(categoriesTeachersTable);

  const handleDeleteRowInCategoriesTeachers = (id: string): void => {
    categoriesTeachersTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(CategoriesTeachersActionBuilder.setItems(data)),
      openModal
    ]);
  };
  const handleAddingTeachersCategory = (): void => {
    categoriesTeachersTableManager.invokeFunction("add", TableType.Managable, [
      { id: guidGenerator(), category: "", coefficient: "0" }
    ]);
  };
  const handleApplyingNewTableSetting = (): void => {
    categoriesTeachersTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(CategoriesTeachersActionBuilder.setItems(data))
    ]);
  };
  const handleSort = (columnName: string): void => {
    categoriesTeachersTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <CommonContent
      button={
        <ActionButton
          label="Добавить"
          type={ActionButtonType.Warning}
          icon={<PlusIcon />}
          onClick={handleAddingTeachersCategory}
        />
      }
      table={
        <CategoriesTeachersTable
          items={categoriesTeachersTableData}
          handleDeleteRowInCategoriesTeachers={handleDeleteRowInCategoriesTeachers}
          isAdding={isCategoriesTeachersAdding.value}
          handleApplyingNewTableSetting={handleApplyingNewTableSetting}
          setItems={setCategoriesTeachersTableData}
          handleSort={handleSort}
        />
      }
    />
  );
};

export default CategoriesTeachers;
