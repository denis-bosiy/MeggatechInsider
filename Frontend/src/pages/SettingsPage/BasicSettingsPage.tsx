import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input, { InputSize, InputType } from "../../components/Input/Input";
import IconButton from "../../components/IconButton/IconButton";
import ActionButton, { ActionButtonType } from "../../components/ActionButton/ActionButton";
import { BasicSettingsData, TSetting } from "./model/types";
import { BasicSettingsActionBuilder } from "./model/actions";
import { CheckIcon, PenIcon, PlusIcon, TrashIcon } from "../../icons";
import "./SettingsPage.scss";

type BasicSettingsForm = {
  study: { [name: string]: TSetting };
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

  const saveStudySettings = ({ study }: BasicSettingsForm) => {
    dispatch(BasicSettingsActionBuilder.saveSettings(study));
  };

  const saveCoefficient = ({ coefficient }: BasicSettingsForm) => {
    dispatch(BasicSettingsActionBuilder.newCoefficient(coefficient.name, coefficient.value));
  };

  const handleSave = () => {
    handleSubmit(saveStudySettings)();
  };

  const handleNewCoefficient = () => {
    handleSubmit(saveCoefficient)();
    resetField("coefficient");
  };

  const handleResetSettings = () => {
    reset();
  };

  return (
    <div className="settings-page">
      <div className="settings-section">
        <h2>Настройка учебного плана</h2>
        <div className="settings-actions">
          <ActionButton label="Сохранить" type={ActionButtonType.Positive} onClick={handleSave} />
          <ActionButton label="Отменить" type={ActionButtonType.Negative} onClick={handleResetSettings} />
        </div>
        <table className="table -fill -list">
          <tbody>
            {Object.keys(basicSettings).map((fieldKey, id) => {
              const field = basicSettings[fieldKey];
              return (
                <tr key={id} className="row">
                  <td className="cell">{field.label}</td>
                  <td className="cell">
                    <Controller
                      control={control}
                      render={({ field }) => {
                        return (
                          <Input
                            placeholder=""
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            size={InputSize.Micro}
                          />
                        );
                      }}
                      name={`study.${fieldKey}.value`}
                    />
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
