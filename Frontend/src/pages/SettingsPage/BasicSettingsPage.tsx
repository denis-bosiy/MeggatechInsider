import React from "react";
import Input, { InputSize } from "../../components/Input/Input";

// TODO: Improvement. Добавить

const BasicSettingsPage = () => {
  const { control, register } = useForm();

  return (
    <div style={{ display: "flex", gap: 198, alignItems: "baseline" }}>
      <table className="table -fill -list">
        <tbody>
          <tr className="row">
            <td className="cell">Число 10-ых классов</td>
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
          </tr>
          <tr className="row">
            <td className="cell">Число 11-ых классов</td>
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
          </tr>
          <tr className="row">
            <td className="cell">Недель в четверти</td>
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
          </tr>
          <tr className="row">
            <td className="cell">Начало 1 четверти</td>
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
          </tr>
        </tbody>
      </table>
      <table className="table -fill -list">
        <tbody>
          <tr className="row">
            <td className="cell">Начало 1 четверти</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicSettingsPage;
