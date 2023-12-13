import React from "react";
import "./YearImplementationMonitoringPage.scss";
import Input, { InputType, InputSize } from "../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../components/ActionButton/ActionButton";
import { PenIcon } from "../../icons";

const YearImplementationMonitoringPage = () => {
  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {/* {isGuidebookEditing.value ? (
            <div className="toolbar__buttons-box">
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Positive}
                label="Сохранить"
                onClick={handleSaveGuidebookTable}
              />
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Negative}
                label="Отменить"
                onClick={handleResetGuidebookTable}
              />
            </div>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon />}
              onClick={editGuidebookTable}
            />
          )}

          <Input
            className="toolbar__search"
            value={guidebookSearchQuery}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setGuidebookSearchQuery}
            size={InputSize.Default}
            onSearch={handleGuidebookSearch}
          /> */}
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row"></tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default YearImplementationMonitoringPage;
