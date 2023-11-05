import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {Plus} from "../../../../icons";
import CommonContent from "../common/CommonContent";
import TeacherEducationTable from "./table/TeacherEducationTable";
import {useDispatch} from "react-redux";
import {TeacherEducationActionBuilder} from "./model/actions";

const TeacherEducation = () => {
  const dispatch = useDispatch();

  return <CommonContent
    button={<ActionButton
      label="Добавить"
      type={ActionButtonType.Warning}
      icon={<Plus />}
      onClick={() => dispatch(TeacherEducationActionBuilder.addItem("New", 0.3))}
    />}
    table={<TeacherEducationTable/>}
  />;
};

export default TeacherEducation;
