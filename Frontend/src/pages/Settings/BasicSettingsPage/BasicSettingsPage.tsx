import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import IconButton from "../../../components/IconButton/IconButton";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { BasicSettingsData, TSetting } from "./model/types";
import { BasicSettingsActionBuilder } from "./model/actions";
import { CheckIcon, PenIcon, PlusIcon, TrashIcon } from "../../../icons";
import "./BasicSettingsPage.scss";
import { CTable } from "../../../core/Table/CTable";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { TableType } from "../../../core/Table/TableType";
import { CTableManager } from "../../../core/Table/CTableManager";
import { guidGenerator } from "../../../utils/guidGenerator";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";

const BasicSettingsPage = () => {
  const dispatch = useDispatch();
  const { basicSettings, salarySettings } = useSelector(
    (state: { basicSettingsStore: BasicSettingsData }) => state.basicSettingsStore
  );
  const { openModal } = useContext(ModalSettingsContext);

  const [isBasicSettingsEditing, setIsBasicSettingsEditing] = useState<{ value: boolean }>({ value: false });
  const [basicSettingsTableData, setBasicSettingsTableData] = useState<TSetting[]>(structuredClone(basicSettings));
  const basicSettingsTableBuilder: CTableBuilder = new CTableBuilder(basicSettingsTableData, setBasicSettingsTableData);
  basicSettingsTableBuilder.addEditFeature(isBasicSettingsEditing, setIsBasicSettingsEditing);
  const basicSettingsTable: CTable = basicSettingsTableBuilder.getTable();
  const basicSettingsTableManager: CTableManager = new CTableManager(basicSettingsTable);

  const [isSalarySettingsEditing, setIsSalarySettingEditing] = useState<{ value: boolean }>({ value: false });
  const [isSalarySettingsAdding, setIsSalarySettingsAdding] = useState<{ value: boolean }>({ value: false });
  const [salarySettingsTableData, setSalarySettingTableData] = useState<TSetting[]>(structuredClone(salarySettings));
  const salarySettingsTableBuilder: CTableBuilder = new CTableBuilder(
    salarySettingsTableData,
    setSalarySettingTableData
  );
  salarySettingsTableBuilder.addEditFeature(isSalarySettingsEditing, setIsSalarySettingEditing);
  salarySettingsTableBuilder.addManageFeature(isSalarySettingsAdding, setIsSalarySettingsAdding);
  salarySettingsTableBuilder.addSearchFeature();
  const salarySettingsTable: CTable = salarySettingsTableBuilder.getTable();
  const salarySettingsTableManager: CTableManager = new CTableManager(salarySettingsTable);
  const [salarySettingsSearchQuery, setSalarySettingsSearchQuery] = useState<string>("");

  const handleSaveBasicSettings = () => {
    basicSettingsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(BasicSettingsActionBuilder.saveBasicSettings(data))
    ]);
  };
  const handleResetBasicSettings = () => {
    basicSettingsTableManager.invokeFunction("cancel", TableType.Editable, [basicSettings]);
  };
  const editBasicSettings = (): void => {
    basicSettingsTableManager.invokeFunction("edit", TableType.Editable, []);
  };

  const handleSaveSalarySettings = (): void => {
    salarySettingsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(BasicSettingsActionBuilder.saveSalarySettings(data))
    ]);
  };
  const handleResetSalarySettings = (): void => {
    salarySettingsTableManager.invokeFunction("cancel", TableType.Editable, [salarySettings]);
  };
  const editSalarySettings = (): void => {
    salarySettingsTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleDeleteRowInSalarySettings = (id: string): void => {
    salarySettingsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(BasicSettingsActionBuilder.saveSalarySettings(data)),
      openModal
    ]);
  };
  const handleAddingSalarySetting = (): void => {
    salarySettingsTableManager.invokeFunction("add", TableType.Managable, [
      { id: guidGenerator(), label: "", value: "" }
    ]);
  };
  const handleApplyingNewTableSetting = (): void => {
    salarySettingsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(BasicSettingsActionBuilder.saveSalarySettings(data))
    ]);
  };
  const handleSalarySettingsSearch = (): void => {
    salarySettingsTableManager.invokeFunction("search", TableType.Searchable, [
      salarySettingsSearchQuery,
      salarySettings
    ]);
  };

  return (
    <div className="settings-page">
      <div className="settings-section">
        <h2>Настройка учебного плана</h2>
        <div className="settings-actions">
          {isBasicSettingsEditing.value ? (
            <>
              <ActionButton label="Сохранить" type={ActionButtonType.Positive} onClick={handleSaveBasicSettings} />
              <ActionButton label="Отменить" type={ActionButtonType.Negative} onClick={handleResetBasicSettings} />
            </>
          ) : (
            <ActionButton
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editBasicSettings}
            />
          )}
        </div>
        <table className="table -fill -list">
          <tbody>
            {basicSettingsTableData.map((value: TSetting, index) => {
              return (
                <tr key={index} className="row">
                  <td className="cell">{value.label}</td>
                  <td className="cell">
                    {isBasicSettingsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.value}
                        onValueChange={(newValue: string) =>
                          setBasicSettingsTableData(
                            basicSettingsTableData.map((data: TSetting) =>
                              data.label === value.label ? { ...data, value: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.value
                    )}
                  </td>
                </tr>
              );
            })}
            <tr className="row">
              <td className="cell">Всего недель</td>
              <td className="cell">8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="settings-section">
        <h2>Настройка зарплаты</h2>
        <div className="settings-actions">
          {isSalarySettingsEditing.value ? (
            <>
              <ActionButton label="Сохранить" type={ActionButtonType.Positive} onClick={handleSaveSalarySettings} />
              <ActionButton label="Отменить" type={ActionButtonType.Negative} onClick={handleResetSalarySettings} />
            </>
          ) : (
            <ActionButton
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editSalarySettings}
            />
          )}
          <ActionButton
            label="Добавить"
            icon={<PlusIcon />}
            type={ActionButtonType.Warning}
            onClick={handleAddingSalarySetting}
          />
        </div>
        <Input
          placeholder="Поиск"
          value={salarySettingsSearchQuery}
          onValueChange={setSalarySettingsSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSalarySettingsSearch}
        />
        <table className="table -fill -list">
          <tbody>
            {salarySettingsTableData
              .filter(
                (data: TSetting, index: number) =>
                  !isSalarySettingsAdding.value || index !== salarySettingsTableData.length - 1
              )
              .map((row: TSetting, index: number) => {
                return (
                  <tr className="row" key={index}>
                    <td className="cell">
                      {isSalarySettingsEditing.value ? (
                        <Input
                          placeholder=""
                          value={row.label}
                          onValueChange={(newLabel: string) =>
                            setSalarySettingTableData(
                              salarySettingsTableData.map((data: TSetting) =>
                                data.label === row.label ? { ...data, label: newLabel } : data
                              )
                            )
                          }
                          size={InputSize.Micro}
                        />
                      ) : (
                        row.label
                      )}
                    </td>
                    <td className="cell">
                      {isSalarySettingsEditing.value ? (
                        <Input
                          placeholder=""
                          value={row.value}
                          onValueChange={(newValue: string) =>
                            setSalarySettingTableData(
                              salarySettingsTableData.map((data: TSetting) =>
                                data.label === row.label ? { ...data, value: newValue } : data
                              )
                            )
                          }
                          size={InputSize.Micro}
                        />
                      ) : (
                        row.value
                      )}
                    </td>
                    <td className="cell">
                      <IconButton icon={<TrashIcon />} small onClick={() => handleDeleteRowInSalarySettings(row.id)} />
                    </td>
                  </tr>
                );
              })}
            {isSalarySettingsAdding.value && (
              <tr className="row">
                <td className="cell">
                  <Input
                    value={salarySettingsTableData[salarySettingsTableData.length - 1].label}
                    placeholder="Настройка зарплаты"
                    onValueChange={(newLabel: string) => {
                      setSalarySettingTableData(
                        salarySettingsTableData.map((data: TSetting) =>
                          data.id === salarySettingsTableData[salarySettingsTableData.length - 1].id
                            ? { ...data, label: newLabel }
                            : data
                        )
                      );
                    }}
                    size={InputSize.Micro}
                  />
                </td>
                <td className="cell">
                  <Input
                    value={salarySettingsTableData[salarySettingsTableData.length - 1].value}
                    placeholder="Коэффициент"
                    onValueChange={(newValue: string) => {
                      setSalarySettingTableData(
                        salarySettingsTableData.map((data: TSetting) =>
                          data.id === salarySettingsTableData[salarySettingsTableData.length - 1].id
                            ? { ...data, value: newValue }
                            : data
                        )
                      );
                    }}
                    size={InputSize.Micro}
                  />
                </td>
                <td className="cell">
                  <IconButton icon={<CheckIcon />} onClick={handleApplyingNewTableSetting} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicSettingsPage;
