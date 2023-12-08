import React from "react";
import Input, {InputType} from "../../../components/Input/Input";
import {useTableData} from "./useTableData";
import TeacherGuidebookCoursesTimetableButton from "./view/TeacherGuidebookCoursesTimetableButton";
import TeacherGuidebookCoursesTimetableTable from "./view/TeacherGuidebookCoursesTimetableTable";

const TeacherGuidebookCoursesTimetablePage = () => {
  const {
    state,
    actions,
  } = useTableData();

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <TeacherGuidebookCoursesTimetableButton
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
        <TeacherGuidebookCoursesTimetableTable
          availableTimes={state.availableTimes}
          data={state.tableData}
          isEdited={state.isEdited}
          handleSort={actions.handleSort}
          setAvailableTimes={actions.setAvailableTimes}
        />
      </table>
    </>
  );
};

export default TeacherGuidebookCoursesTimetablePage;
