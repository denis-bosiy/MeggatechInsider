import React from "react";
import Input, {InputType} from "../../../components/Input/Input";
import {useTableData} from "./useTableData";
import TeacherGuidebookTimetableButton from "./view/TeacherGuidebookTimetableButton";
import TeacherGuidebookTimetableTable from "./view/TeacherGuidebookTimetableTable";

const TeacherGuidebookCoursesTimetablePage = () => {
  const {
    state,
    actions,
  } = useTableData();

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <TeacherGuidebookTimetableButton
            isEdited={state.isEdited}
            handleEdit={actions.handleEdit}
            handleSave={actions.handleSave}
            handleReset={actions.handleReset}
          />
          <Input
            className="toolbar__search"
            value={state.searchValue}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={actions.setSearchValue}
            onSearch={actions.handleSearch}
          />
        </div>
      </div>
      <table className="table">
        <TeacherGuidebookTimetableTable
          availableTime={state.availableTime}
          data={state.tableData}
          isEdited={state.isEdited}
          handleSort={actions.handleSort}
          setSelectedTime={actions.setSelectedTime}
        />
      </table>
    </>
  );
};

export default TeacherGuidebookCoursesTimetablePage;
