import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input, { InputSize } from "../../components/Input/Input";
import IconButton from "../../components/IconButton/IconButton";
import { CheckIcon, PenIcon, PlusIcon, TrashIcon } from "../../icons";
import ActionButton, { ActionButtonType } from "../../components/ActionButton/ActionButton";

import "./SettingsPage.scss";

export type TSetting = {
  name: string;
  label: string;
};

const BASIC_SETTINGS_STUDY: TSetting[] = [
  { name: "count10", label: "Число 10-ых классов" },
  { name: "count11", label: "Число 11-ых классов" },
  { name: "weeksIn1", label: "Недель в 1 четверти" },
  { name: "start1", label: "Начало 1 четверти" },
  { name: "weeksIn2", label: "Недель во 2 четверти" },
  { name: "start2", label: "Начало 2 четверти" },
  { name: "weeksIn3", label: "Недель в 3 четверти" },
  { name: "start3", label: "Начало 3 четверти" },
  { name: "weeksIn4", label: "Недель в 4 четверти" },
  { name: "start4", label: "Начало 4 четверти" }
];

// TODO: Это уберется когда будет импорт динамических таблиц или как там оно было названо
export type TField = {
  label: string;
  value: string;
};

const SALARY_SETTINGS_STUB: TField[] = [
  { label: "Базовый оклад", value: "1000" },
  { label: "Доплата за литературу", value: "7000" },
  { label: "Коэф. за высшее образование", value: "0,5" },
  { label: "Коэф. за ученую степень к.н.", value: "0,6" },
  { label: "Коэф. за ученую степень д.н.", value: "0,7" },
  { label: "Коэф. за первую категорию", value: "0,4" },
  { label: "Коэф. за высшую категорию", value: "0,7" },
  { label: "Коэф. за углубленную категорию", value: "0,4" }
];

const BasicSettingsPage = () => {
  const { control } = useForm();

  return (
    <div className="settings-page">
      <div className="settings-section">
        <h2>Настройка учебного плана</h2>
        <div className="settings-actions">
          <ActionButton label="Сохранить" type={ActionButtonType.Positive} />
          <ActionButton label="Отменить" type={ActionButtonType.Negative} />
        </div>
        <table className="table -fill -list">
          <tbody>
            {BASIC_SETTINGS_STUDY.map((field, id) => {
              return (
                <tr key={id} className="row">
                  <td className="cell">{field.label}</td>
                  <td className="cell">
                    <Controller
                      control={control}
                      render={({ field }) => {
                        return (
                          <Input
                            value={field.value}
                            placeholder=""
                            onValueChange={field.onChange}
                            size={InputSize.Micro}
                          />
                        );
                      }}
                      name={`study[${id}][${field.name}]`}
                    />
                  </td>
                </tr>
              );
            })}
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
        <table className="table -fill -list">
          <tbody>
            {SALARY_SETTINGS_STUB.map((coefficient, id) => {
              return (
                <tr className="row" key={id}>
                  <td className="cell">{coefficient.label}</td>
                  <td className="cell">{coefficient.value}</td>
                  <td className="cell">
                    <IconButton icon={<TrashIcon />} small />
                  </td>
                </tr>
              );
            })}
            <tr className="row">
              <td className="cell">
                <Input
                  value="2"
                  placeholder="2"
                  onValueChange={() => {
                    // ...
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  value="2"
                  placeholder="2"
                  onValueChange={() => {
                    // ...
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <IconButton icon={<CheckIcon />} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicSettingsPage;
