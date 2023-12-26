import React, { useContext, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input, { InputType, InputSize } from "../../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { CategorySetting, DepthTypeSetting, FinancingSetting, IsBasisSetting, SettingsData, TypeSetting } from "./model/types";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SybjectSettingsActionBuilder } from "./model/actions";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import "./SubjectSettingsPage.scss";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";

//1 table
const FinancingSettingsTab = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const dataFinancing = useSelector(
    (state: { sybjectSettingsPageStore: SettingsData }) =>
      state.sybjectSettingsPageStore
  ).financingSettings;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTableAdding, setIsTableAdding] = useState<{ value: boolean }>({ value: false });
  const [financingTableData, setFinancingTableData] = useState<FinancingSetting[]>(
    structuredClone(dataFinancing)
  );
  const financingTableBuilder: CTableBuilder = new CTableBuilder(financingTableData, setFinancingTableData);
  financingTableBuilder.addManageFeature(isTableAdding, setIsTableAdding);
  financingTableBuilder.addSearchFeature();
  const financingTable: CTable = financingTableBuilder.getTable();
  const financingTableManager: CTableManager = new CTableManager(financingTable);

  const handleAdding = (): void => {
    financingTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        subjectFinancing: "",
      }
    ]);
  };
  const handleApplyingNew = (): void => {
    financingTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveFinancingSettings(data))
    ]);
  };
  const handleSearch = (): void => {
    financingTableManager.invokeFunction("search", TableType.Searchable, [
      searchQuery,
      dataFinancing
    ]);
  };
  const handleSort = (columnName: string): void => {
    financingTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDelete = (id: string): void => {
    financingTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveFinancingSettings(data)),
      openModal
    ]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAdding}
          />
        </div>
        <div className="toolbar__buttons-wrapper">
          <Input
            className="toolbar__search"
            placeholder="Поиск"
            value={searchQuery}
            onValueChange={setSearchQuery}
            size={InputSize.Default}
            type={InputType.Search}
            onSearch={handleSearch}
          /> 
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("subjectFinancing")}>
              Финансирование предмета
            </th>
          </tr>
        </thead>
        <tbody>
          {financingTableData
            .filter((data: FinancingSetting, index: number) =>
              !isTableAdding.value || index !== financingTableData.length - 1
            )
            .map((value: FinancingSetting) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {value.subjectFinancing}
                  </td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDelete(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isTableAdding.value && financingTableData[financingTableData.length - 1] && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="Наименование"
                  value={financingTableData[financingTableData.length - 1].subjectFinancing}
                  onValueChange={(newLabel: string) => {
                    setFinancingTableData(
                      financingTableData.map((data: FinancingSetting) =>
                        data.id === financingTableData[financingTableData.length - 1].id
                          ? { ...data, subjectFinancing: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <IconButton
                  icon={<CheckMarkIcon />}
                  type={IconButtonType.Secondary}
                  onClick={handleApplyingNew}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table> 
    </>
  );
};

const SybjectGuidebookSettingsTab = () => {

  //2 table
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  
  const dataCategory = useSelector(
    (state: { sybjectSettingsPageStore: SettingsData }) =>
      state.sybjectSettingsPageStore
  ).categorySetting;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTableAdding, setIsTableAdding] = useState<{ value: boolean }>({ value: false });
  const [categoryTableData, setCategoryTableData] = useState<CategorySetting[]>(
    structuredClone(dataCategory)
  );
  const categoryTableBuilder: CTableBuilder = new CTableBuilder(categoryTableData, setCategoryTableData);
  categoryTableBuilder.addManageFeature(isTableAdding, setIsTableAdding);
  categoryTableBuilder.addSearchFeature();
  const categoryTable: CTable = categoryTableBuilder.getTable();
  const categoryTableManager: CTableManager = new CTableManager(categoryTable);

  const handleAdding = (): void => {
    categoryTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        subjectsCategory: "",
      }
    ]);
  };
  const handleApplyingNew = (): void => {
    categoryTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveCategorySettings(data))
    ]);
  };
  const handleSearchCategory = (): void => {
    categoryTableManager.invokeFunction("search", TableType.Searchable, [
      searchQuery,
      dataCategory
    ]);
  };
  const handleSort = (columnName: string): void => {
    categoryTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDelete = (id: string): void => {
    categoryTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveCategorySettings(data)),
      openModal
    ]);
  };
  
  //3 table
  const dataIsBasisSetting = useSelector(
    (state: { sybjectSettingsPageStore: SettingsData }) =>
      state.sybjectSettingsPageStore
  ).isBasisSetting;
  const [searchQueryIsBasisSetting, setSearchQueryIsBasisSetting] = useState<string>("");
  const [isTableAddingIsBasisSetting, setIsTableAddingIsBasisSetting] = useState<{ value: boolean }>({ value: false });
  const [isBasisSettingTableData, setIsBasisSettingTableData] = useState<IsBasisSetting[]>(
    structuredClone(dataIsBasisSetting)
  );
  const isBasisSettingTableBuilder: CTableBuilder = new CTableBuilder(isBasisSettingTableData, setIsBasisSettingTableData);
  isBasisSettingTableBuilder.addManageFeature(isTableAddingIsBasisSetting, setIsTableAddingIsBasisSetting);
  isBasisSettingTableBuilder.addSearchFeature();
  const isBasisSettingTable: CTable = isBasisSettingTableBuilder.getTable();
  const isBasisSettingTableManager: CTableManager = new CTableManager(isBasisSettingTable);

  const handleAddingIsBasisSetting = (): void => {
    isBasisSettingTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        basisCategory: "",
      }
    ]);
  };
  const handleApplyingNewIsBasisSetting = (): void => {
    isBasisSettingTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveIsBasisSettings(data))
    ]);
  };
  const handleSearchIsBasisSetting = (): void => {
    isBasisSettingTableManager.invokeFunction("search", TableType.Searchable, [
      searchQueryIsBasisSetting,
      dataIsBasisSetting,
    ]);
  };
  const handleSortIsBasisSetting = (columnName: string): void => {
    isBasisSettingTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteIsBasisSetting = (id: string): void => {
    isBasisSettingTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveIsBasisSettings(data)),
      openModal
    ]);
  };

  //4 table
  const dataDepthTypeSetting = useSelector(
    (state: { sybjectSettingsPageStore: SettingsData }) =>
      state.sybjectSettingsPageStore
  ).depthTypeSetting;
  const [searchQueryDepthTypeSetting, setSearchQueryDepthTypeSetting] = useState<string>("");
  const [isTableAddingDepthTypeSetting, setIsTableAddingDepthTypeSetting] = useState<{ value: boolean }>({ value: false });
  const [depthTypeSettingTableData, setDepthTypeSettingTableData] = useState<DepthTypeSetting[]>(
    structuredClone(dataDepthTypeSetting)
  );
  const depthTypeSettingTableBuilder: CTableBuilder = new CTableBuilder(depthTypeSettingTableData, setDepthTypeSettingTableData);
  depthTypeSettingTableBuilder.addManageFeature(isTableAddingDepthTypeSetting, setIsTableAddingDepthTypeSetting);
  depthTypeSettingTableBuilder.addSearchFeature();
  const depthTypeSettingTable: CTable = depthTypeSettingTableBuilder.getTable();
  const depthTypeSettingTableManager: CTableManager = new CTableManager(depthTypeSettingTable);

  const handleAddingDepthTypeSetting = (): void => {
    depthTypeSettingTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        depthType: "",
        depthCoefficient: 1,
      }
    ]);
  };
  const handleApplyingNewDepthTypeSetting = (): void => {
    depthTypeSettingTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveDepthTypeSettings(data))
    ]);
  };
  const handleSearchDepthTypeSetting = (): void => {
    depthTypeSettingTableManager.invokeFunction("search", TableType.Searchable, [
      searchQueryDepthTypeSetting,
      dataDepthTypeSetting,
    ]);
  };
  const handleSortDepthTypeSetting = (columnName: string): void => {
    depthTypeSettingTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteDepthTypeSetting = (id: string): void => {
    depthTypeSettingTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveDepthTypeSettings(data)),
      openModal
    ]);
  };

  return (
    <>
      <div className="sybject-settings-page__container">
        <div className="sybject-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Категории предметов</h2>
          <div className="toolbar">
            <div className="toolbar__buttons-wrapper">
              <ActionButton
                label="Добавить"
                type={ActionButtonType.Warning}
                icon={<PlusIcon />}
                onClick={handleAdding}
              />
            </div>
            <div className="toolbar__buttons-wrapper">
              <Input
                className="toolbar__search"
                placeholder="Поиск"
                value={searchQuery}
                onValueChange={setSearchQuery}
                size={InputSize.Default}
                type={InputType.Search}
                onSearch={handleSearchCategory}
              /> 
            </div>
          </div>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSort("subjectsCategory")}>
                  Категории предметов
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryTableData
                .filter((data: CategorySetting, index: number) =>
                  !isTableAdding.value || index !== categoryTableData.length - 1
                )
                .map((value: CategorySetting) => {
                  return (
                    <tr className="row" key={value.id}>
                      <td className="cell">
                        {value.subjectsCategory}
                      </td>
                      <td className="cell">
                        <IconButton icon={<GarbageIcon />} onClick={() => handleDelete(value.id.toString())} />
                      </td>
                    </tr>
                  );
                })}

              {isTableAdding.value && categoryTableData[categoryTableData.length - 1] && (
                <tr className="row">
                  <td className="cell">
                    <Input
                      placeholder="Наименование"
                      value={categoryTableData[categoryTableData.length - 1].subjectsCategory}
                      onValueChange={(newLabel: string) => {
                        setCategoryTableData(
                          categoryTableData.map((data: CategorySetting) =>
                            data.id === categoryTableData[categoryTableData.length - 1].id
                              ? { ...data, subjectsCategory: newLabel }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <IconButton
                      icon={<CheckMarkIcon />}
                      type={IconButtonType.Secondary}
                      onClick={handleApplyingNew}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>          
        </div>

        <div className="sybject-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Является основным</h2>
          <div className="toolbar">
            <div className="toolbar__buttons-wrapper">
              <ActionButton
                label="Добавить"
                type={ActionButtonType.Warning}
                icon={<PlusIcon />}
                onClick={handleAddingIsBasisSetting}
              />
            </div>
            <div className="toolbar__buttons-wrapper">
              <Input
                className="toolbar__search"
                placeholder="Поиск"
                value={searchQueryIsBasisSetting}
                onValueChange={setSearchQueryIsBasisSetting}
                size={InputSize.Default}
                type={InputType.Search}
                onSearch={handleSearchIsBasisSetting}
              /> 
            </div>
          </div>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSortIsBasisSetting("basisCategory")}>
                  Является основным
                </th>
              </tr>
            </thead>
            <tbody>
              {isBasisSettingTableData
                .filter((data: IsBasisSetting, index: number) =>
                  !isTableAddingIsBasisSetting.value || index !== isBasisSettingTableData.length - 1
                )
                .map((value: IsBasisSetting) => {
                  return (
                    <tr className="row" key={value.id}>
                      <td className="cell">
                        {value.basisCategory}
                      </td>
                      <td className="cell">
                        <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteIsBasisSetting(value.id.toString())} />
                      </td>
                    </tr>
                  );
                })}

              {isTableAddingIsBasisSetting.value && isBasisSettingTableData[isBasisSettingTableData.length - 1] && (
                <tr className="row">
                  <td className="cell">
                    <Input
                      placeholder="Наименование"
                      value={isBasisSettingTableData[isBasisSettingTableData.length - 1].basisCategory}
                      onValueChange={(newLabel: string) => {
                        setIsBasisSettingTableData(
                          isBasisSettingTableData.map((data: IsBasisSetting) =>
                            data.id === isBasisSettingTableData[isBasisSettingTableData.length - 1].id
                              ? { ...data, basisCategory: newLabel }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <IconButton
                      icon={<CheckMarkIcon />}
                      type={IconButtonType.Secondary}
                      onClick={handleApplyingNewIsBasisSetting}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>          
        </div>

        <div className="sybject-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Является углубленным</h2>
          <div className="toolbar">
            <div className="toolbar__buttons-wrapper">
              <ActionButton
                label="Добавить"
                type={ActionButtonType.Warning}
                icon={<PlusIcon />}
                onClick={handleAddingDepthTypeSetting}
              />
            </div>
            <div className="toolbar__buttons-wrapper">
              <Input
                className="toolbar__search"
                placeholder="Поиск"
                value={searchQueryDepthTypeSetting}
                onValueChange={setSearchQueryDepthTypeSetting}
                size={InputSize.Default}
                type={InputType.Search}
                onSearch={handleSearchDepthTypeSetting}
              /> 
            </div>
          </div>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSortDepthTypeSetting("depthType")}>
                  Является углубленным
                </th>
                <th className="cell -filter" onClick={() => handleSortDepthTypeSetting("depthCoefficient")}>
                  Коэффициент
                </th>
              </tr>
            </thead>
            <tbody>
              {depthTypeSettingTableData
                .filter((data: DepthTypeSetting, index: number) =>
                  !isTableAddingDepthTypeSetting.value || index !== depthTypeSettingTableData.length - 1
                )
                .map((value: DepthTypeSetting) => {
                  return (
                    <tr className="row" key={value.id}>
                      <td className="cell">
                        {value.depthType}
                      </td>
                      <td className="cell">
                        {value.depthCoefficient}
                      </td>
                      <td className="cell">
                        <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteDepthTypeSetting(value.id.toString())} />
                      </td>
                    </tr>
                  );
                })}

              {isTableAddingDepthTypeSetting.value && depthTypeSettingTableData[depthTypeSettingTableData.length - 1] && (
                <tr className="row">
                  <td className="cell">
                    <Input
                      placeholder="Наименование"
                      value={depthTypeSettingTableData[depthTypeSettingTableData.length - 1].depthType}
                      onValueChange={(newLabel: string) => {
                        setDepthTypeSettingTableData(
                          depthTypeSettingTableData.map((data: DepthTypeSetting) =>
                            data.id === depthTypeSettingTableData[depthTypeSettingTableData.length - 1].id
                              ? { ...data, depthType: newLabel }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <Input
                      placeholder="Коефициент"
                      value={depthTypeSettingTableData[depthTypeSettingTableData.length - 1].depthCoefficient.toString()}
                      onValueChange={(newLabel: string) => {
                        setDepthTypeSettingTableData(
                          depthTypeSettingTableData.map((data: DepthTypeSetting) =>
                            data.id === depthTypeSettingTableData[depthTypeSettingTableData.length - 1].id
                              ? { ...data, depthCoefficient: Number(newLabel) }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <IconButton
                      icon={<CheckMarkIcon />}
                      type={IconButtonType.Secondary}
                      onClick={handleApplyingNewDepthTypeSetting}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>          
        </div>
              
      </div>
      
    </>
  );
};

//5 table
const TypeSettingsTab = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const dataType = useSelector(
    (state: { sybjectSettingsPageStore: SettingsData }) =>
      state.sybjectSettingsPageStore
  ).typeSetting;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTableAdding, setIsTableAdding] = useState<{ value: boolean }>({ value: false });
  const [isTableEditing, setIsTableEditing] = useState<{ value: boolean }>({ value: false });
  const [typeTableData, setTypeTableData] = useState<TypeSetting[]>(
    structuredClone(dataType)
  );
  const typeTableBuilder: CTableBuilder = new CTableBuilder(typeTableData, setTypeTableData);
  typeTableBuilder.addManageFeature(isTableAdding, setIsTableAdding);
  typeTableBuilder.addEditFeature(isTableEditing, setIsTableEditing);
  typeTableBuilder.addSearchFeature();
  const typeTable: CTable = typeTableBuilder.getTable();
  const typeTableManager: CTableManager = new CTableManager(typeTable);

  const handleSave = () => {
    typeTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveTypeSettings(data))
    ]);
  };
  const handleReset = () => {
    typeTableManager.invokeFunction("cancel", TableType.Editable, [dataType]);
  };
  const editOff = (): void => {
    typeTableManager.invokeFunction("edit", TableType.Editable, []);
  };

  const handleAdding = (): void => {
    typeTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        subjectType: "",
        basisType: "Основной",
        depthType: "Углубленный",
      }
    ]);
  };
  const handleApplyingNewT = (): void => {
    typeTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveTypeSettings(data))
    ]);
  };
  const handleSearch = (): void => {
    typeTableManager.invokeFunction("search", TableType.Searchable, [
      searchQuery,
      dataType
    ]);
  };
  const handleSort = (columnName: string): void => {
    typeTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDelete = (id: string): void => {
    typeTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(SybjectSettingsActionBuilder.saveTypeSettings(data)),
      openModal
    ]);
  };
  const basisOption: ISelectOption[] = [
    { id: "1", content: "Основной" },
    { id: "2", content: "Дополнительный" },
  ];

  const depthOption: ISelectOption[] = [
    { id: "1", content: "Углубленный" },
    { id: "2", content: "Не углубленный" },
  ];

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isTableEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSave}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleReset}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editOff}
            />
          )}
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAdding}
          />
        </div>
        <div className="toolbar__buttons-wrapper">
          <Input
            className="toolbar__search"
            placeholder="Поиск"
            value={searchQuery}
            onValueChange={setSearchQuery}
            size={InputSize.Default}
            type={InputType.Search}
            onSearch={handleSearch}
          /> 
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("subjectType")}>
              Тип
            </th>
            <th className="cell -filter" onClick={() => handleSort("basisType")}>
              Является основным
            </th>
            <th className="cell -filter" onClick={() => handleSort("depthType")}>
              Является углубленным
            </th>
          </tr>
        </thead>
        <tbody>
          {typeTableData
            .filter((data: TypeSetting, index: number) =>
              !isTableAdding.value || index !== typeTableData.length - 1
            )
            .map((value: TypeSetting) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isTableEditing.value ? (
                      <Input
                        placeholder="Наименование"
                        value={value.subjectType}
                        onValueChange={(newValue: string) =>
                          setTypeTableData(
                            typeTableData.map((data: TypeSetting) =>
                              data.id === value.id ? { ...data, subjectType: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.subjectType
                    )}
                  </td>
                  <td className="cell">
                    {isTableEditing.value ? (
                      <Select
                        currentValue={basisOption.find(e => e.content === value.basisType)}
                        options={basisOption}
                        onValueChange={(newValue: string) => {
                          const selectedOption = basisOption.find(e => e.id === newValue);
                          if (selectedOption) {
                            setTypeTableData(
                              typeTableData.map((data: TypeSetting) =>
                                data.id === value.id ? {
                                  ...data,
                                  basisType: selectedOption.content
                                } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.basisType
                    )}
                  </td>
                  <td className="cell">
                    {isTableEditing.value ? (
                      <Select
                        currentValue={depthOption.find(e => e.content === value.depthType)}
                        options={depthOption}
                        onValueChange={(newValue: string) => {
                          const selectedOption = depthOption.find(e => e.id === newValue);
                          if (selectedOption) {
                            setTypeTableData(
                              typeTableData.map((data: TypeSetting) =>
                                data.id === value.id ? {
                                  ...data,
                                  depthType: selectedOption.content
                                } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.depthType
                    )}
                  </td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDelete(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isTableAdding.value && typeTableData[typeTableData.length - 1] && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="Наименование"
                  value={typeTableData[typeTableData.length - 1].subjectType}
                  onValueChange={(newLabel: string) => {
                    setTypeTableData(
                      typeTableData.map((data: TypeSetting) =>
                        data.id === typeTableData[typeTableData.length - 1].id
                          ? { ...data, subjectType: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Select
                  options={basisOption}
                  onValueChange={(newValue: string) => {
                    const selectedOption = basisOption.find(e => e.id === newValue);
                    if (selectedOption) {
                      setTypeTableData(
                        typeTableData.map((data: TypeSetting) =>
                          data.id === typeTableData[typeTableData.length - 1].id
                            ? { ...data, basisType: selectedOption.content}
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <Select
                  options={depthOption}
                  onValueChange={(newValue: string) => {
                    const selectedOption = depthOption.find(e => e.id === newValue);
                    if (selectedOption) {
                      setTypeTableData(
                        typeTableData.map((data: TypeSetting) =>
                          data.id === typeTableData[typeTableData.length - 1].id
                            ? { ...data, depthType: selectedOption.content}
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <IconButton
                  icon={<CheckMarkIcon />}
                  type={IconButtonType.Secondary}
                  onClick={handleApplyingNewT}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table> 
    </>
  );
};


const SubjectSettingsPage = () => {
  const [tabParams, setTabParams] = useSearchParams();
  
  return (
    <>
      {((tabParams.get("tab")) == "finances") ? (
        <FinancingSettingsTab />) 
        : (<></>) }
      {((tabParams.get("tab")) == "guidebooks") ? (
        <SybjectGuidebookSettingsTab />) 
        : (<></>)}
      {((tabParams.get("tab")) == "types") ? (
        <TypeSettingsTab />) 
        : (<></>) }
    </>
  );
};

export default SubjectSettingsPage;
