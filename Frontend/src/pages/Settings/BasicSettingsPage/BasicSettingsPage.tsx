import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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

type BasicSettingsForm = {
  study: TSetting[];
  salary: TSetting[];
  coefficient: {
    name: string;
    value: string;
  };
};

const BasicSettingsPage = () => {
  const dispatch = useDispatch();
  const { basicSettings, salarySettings } = useSelector(
    (state: { basicSettingsStore: BasicSettingsData }) => state.basicSettingsStore
  );
  const [isBasicSettingsEditing, setIsBasicSettingsEditing] = useState<boolean>(false);
  const [basicSettingsTableData, setBasicSettingsTableData] = useState<TSetting[]>(structuredClone(basicSettings));
  const basicSettingsTable: CTable = CTableBuilder.GetTable(basicSettingsTableData, setBasicSettingsTableData, [
    TableType.Editable
  ]);
  const basicSettingsTableManager: CTableManager = new CTableManager(basicSettingsTable);
  const { control, handleSubmit, reset, resetField } = useForm<BasicSettingsForm>({
    defaultValues: {
      study: basicSettings,
      salary: salarySettings,
      coefficient: {
        name: "",
        value: ""
      }
    }
  });
  const [searchQuery, setSearchQuery] = useState("");

  const saveCoefficient = ({ coefficient }: BasicSettingsForm) => {
    dispatch(BasicSettingsActionBuilder.newCoefficient(coefficient.name, coefficient.value));
  };

  const handleSaveBasicSettings = () => {
    basicSettingsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(BasicSettingsActionBuilder.saveSettings(data))
    ]);
    setIsBasicSettingsEditing(false);
  };

  const handleNewCoefficient = () => {
    handleSubmit(saveCoefficient)();
    resetField("coefficient");
  };

  const handleResetBasicSettings = () => {
    basicSettingsTableManager.invokeFunction("cancel", TableType.Editable, [basicSettings]);
    setIsBasicSettingsEditing(false);
  };

  const editBasicSettings = (): void => {
    basicSettingsTableManager.invokeFunction("edit", TableType.Editable, []);
    setIsBasicSettingsEditing(true);
  };

  return (
    <div className="settings-page">
      <div className="settings-section">
        <h2>Настройка учебного плана</h2>
        <div className="settings-actions">
          {isBasicSettingsEditing ? (
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
            {Object.values(basicSettingsTableData).map((value: any, index) => {
              return (
                <tr key={index} className="row">
                  <td className="cell">{value.label}</td>
                  <td className="cell">
                    {isBasicSettingsEditing ? (
                      <Input
                        placeholder=""
                        value={value.value}
                        onValueChange={(newValue: string) =>
                          setBasicSettingsTableData(
                            basicSettingsTableData.map((data: TSetting) =>
                              data.label === value.label ? { label: data.label, value: newValue } : data
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
          <ActionButton
            label="Редактировать"
            icon={<PenIcon width={18} height={18} />}
            type={ActionButtonType.Default}
          />
          <ActionButton label="Добавить" icon={<PlusIcon />} type={ActionButtonType.Warning} />
        </div>
        <Input
          placeholder="Поиск"
          value={searchQuery}
          onValueChange={setSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
        />
        <table className="table -fill -list">
          <tbody>
            {salarySettings.map((coefficient, id) => {
              return (
                <tr className="row" key={id}>
                  <td className="cell">{coefficient.label}</td>
                  <td className="cell">{coefficient.value}</td>
                  <td className="cell">
                    <IconButton
                      icon={<TrashIcon />}
                      small
                      onClick={() => {
                        dispatch(BasicSettingsActionBuilder.deleteCoefficient(coefficient.label));
                      }}
                    />
                  </td>
                </tr>
              );
            })}
            <tr className="row">
              <td className="cell">
                <Controller
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        value={field.value || ""}
                        placeholder="Название"
                        onValueChange={field.onChange}
                        size={InputSize.Micro}
                      />
                    );
                  }}
                  name="coefficient.name"
                />
              </td>
              <td className="cell">
                <Controller
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        value={field.value || ""}
                        placeholder="Название"
                        onValueChange={field.onChange}
                        size={InputSize.Micro}
                      />
                    );
                  }}
                  name="coefficient.value"
                />
              </td>
              <td className="cell">
                <IconButton icon={<CheckIcon />} onClick={handleNewCoefficient} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicSettingsPage;
