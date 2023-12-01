import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { ActionBuilder } from "./model/actions";
import { OffBudgetCategoriData, OffBudgetCategoriesPageData } from "./model/types";
import { CheckBox } from "../../../components/CheckBox/CheckBox";

const OffBudgetCategoriesPage = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const offBudgetCategories = useSelector((state: {offBudgetCategoriesPageStore: OffBudgetCategoriesPageData}) => state.offBudgetCategoriesPageStore);
  const [isOffBudgetCategoriesEditing, setIsOffBudgetCategoriesEditing] = useState<{ value: boolean }>({ value: false });
  const [isOffBudgetCategoriesAdding, setIsOffBudgetCategoriesAdding] = useState<{ value: boolean }>({ value: false });
  const [offBudgetCategoriesTableData, setOffBudgetCategoriesTableData] = useState<OffBudgetCategoriesPageData>(structuredClone(offBudgetCategories));
  const [teacherSearchQuery, setTeacherSearchQuery] = useState<string>("");
  const offBudgetCategoriesTableBuilder: CTableBuilder = new CTableBuilder(offBudgetCategoriesTableData, setOffBudgetCategoriesTableData);
  offBudgetCategoriesTableBuilder.addEditFeature(isOffBudgetCategoriesEditing, setIsOffBudgetCategoriesEditing);
  offBudgetCategoriesTableBuilder.addManageFeature(isOffBudgetCategoriesAdding, setIsOffBudgetCategoriesAdding);
  offBudgetCategoriesTableBuilder.addSearchFeature();
  const offBudgetCategoriesTable: CTable = offBudgetCategoriesTableBuilder.getTable();
  const offBudgetCategoriesTableManager: CTableManager = new CTableManager(offBudgetCategoriesTable);

  const handleSaveOffBudgetCategories = () => {
    offBudgetCategoriesTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveOffBudgetCategories(data))
    ]);
  };
  const handleResetOffBudgetCategories = () => {
    offBudgetCategoriesTableManager.invokeFunction("cancel", TableType.Editable, [offBudgetCategories]);
  };
  const editOffBudgetCategories = (): void => {
    offBudgetCategoriesTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleAddingOffBudgetCategories = (): void => {
    offBudgetCategoriesTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        name: "",
        costPerHour: 1,
      }
    ]);
  };
  const handleApplyingNewTeacher = (): void => {
    offBudgetCategoriesTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveOffBudgetCategories(data))
    ]);
  };
  const handleTeacherSearch = (): void => {
    offBudgetCategoriesTableManager.invokeFunction("search", TableType.Searchable, [
      teacherSearchQuery,
      offBudgetCategories
    ]);
  };
  const handleSort = (columnName: string): void => {
    offBudgetCategoriesTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteTeacher = (id: string): void => {
    offBudgetCategoriesTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(ActionBuilder.saveOffBudgetCategories(data)),
      openModal
    ]);
  };
  const [isSaveProportion, setIsSaveProportion] = useState<{ value: boolean }>({ value: true });
  const handleIsSaveProportion = ():void => {
    setIsSaveProportion({value: !isSaveProportion.value});           
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isOffBudgetCategoriesEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveOffBudgetCategories}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetOffBudgetCategories}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editOffBudgetCategories}
            />
          )}
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAddingOffBudgetCategories}
          />
        </div>
        <div className="toolbar__buttons-wrapper">
          <Input
            className="toolbar__search"
            placeholder="Поиск"
            value={teacherSearchQuery}
            onValueChange={setTeacherSearchQuery}
            size={InputSize.Default}
            type={InputType.Search}
            onSearch={handleTeacherSearch}
          /> 
        </div>
        <div className="toolbar__buttons-box">
          <div className="toolbar__button">
            <CheckBox
              checked={isSaveProportion.value}
              onChange={handleIsSaveProportion}
            />
          </div>  
          <p className="p">Сохранять пропорцию</p>   
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("name")}>
              Наименование
            </th>
            <th className="cell -filter" onClick={() => handleSort("category")}>
              Стоимость часа
            </th>
            <th className="cell -filter" onClick={() => handleSort("categoryPayrollAccounting")}>
              Значение корпоративного оклада
            </th>
          </tr>
        </thead>
        <tbody>
          {offBudgetCategoriesTableData
            .filter((data: OffBudgetCategoriData, index: number) =>
              !isOffBudgetCategoriesAdding.value || index !== offBudgetCategoriesTableData.length - 1
            )
            .map((value: OffBudgetCategoriData) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isOffBudgetCategoriesEditing.value ? (
                      <Input
                        placeholder="Наименование"
                        value={value.name}
                        onValueChange={(newValue: string) =>
                          setOffBudgetCategoriesTableData(
                            offBudgetCategoriesTableData.map((data: OffBudgetCategoriData) =>
                              data.id === value.id ? { ...data, name: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td className="cell">
                    {isOffBudgetCategoriesEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.costPerHour.toString()}
                        onValueChange={(newValue: string) =>
                          setOffBudgetCategoriesTableData(
                            isSaveProportion.value 
                              ? (() => {
                                const oldValueCat = offBudgetCategoriesTableData.find(el => el.id === value.id);
                                const oldValue = oldValueCat?.costPerHour !== undefined && oldValueCat?.costPerHour !== 0 ? oldValueCat.costPerHour : 1;
                                if(Number(newValue) === 0) newValue = "1";
                                const ratio = Number(newValue)/oldValue;
                                return offBudgetCategoriesTableData.map((data: OffBudgetCategoriData) =>
                                  data.id === value.id ? { ...data, costPerHour: Number(newValue)} : { ...data, costPerHour: data.costPerHour*ratio }
                                );
                              })
                              : offBudgetCategoriesTableData.map((data: OffBudgetCategoriData) =>
                                data.id === value.id ? { ...data, costPerHour: Number(newValue) === 0 ? 1 :  Number(newValue) } : data
                              )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.costPerHour
                    )}
                  </td>                 
                  <td className="cell">{value.corporateSalaryValue}</td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteTeacher(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isOffBudgetCategoriesAdding.value && offBudgetCategoriesTableData[offBudgetCategoriesTableData.length - 1] && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="Наименование"
                  value={offBudgetCategoriesTableData[offBudgetCategoriesTableData.length - 1].name}
                  onValueChange={(newLabel: string) => {
                    setOffBudgetCategoriesTableData(
                      offBudgetCategoriesTableData.map((data: OffBudgetCategoriData) =>
                        data.id === offBudgetCategoriesTableData[offBudgetCategoriesTableData.length - 1].id
                          ? { ...data, name: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder=""
                  value={offBudgetCategoriesTableData[offBudgetCategoriesTableData.length - 1].costPerHour.toString()}
                  onValueChange={(newLabel: string) => {
                    setOffBudgetCategoriesTableData(
                      offBudgetCategoriesTableData.map((data: OffBudgetCategoriData) =>
                        data.id === offBudgetCategoriesTableData[offBudgetCategoriesTableData.length - 1].id
                          ? { ...data, costPerHour: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell"></td>
              <td className="cell">
                <IconButton
                  icon={<CheckMarkIcon />}
                  type={IconButtonType.Secondary}
                  onClick={handleApplyingNewTeacher}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default OffBudgetCategoriesPage;
