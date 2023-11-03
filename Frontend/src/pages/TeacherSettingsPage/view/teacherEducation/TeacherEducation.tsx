import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {Pluse} from "../../../../icons";
import CommonContent from "../common/CommonContent";
import TeacherEducationTable from "./table/TeacherEducationTable";

const TeacherEducation = () => {
  return <CommonContent
    button={<ActionButton label="Добавить" type={ActionButtonType.Warning} icon={<Pluse />} />}
    table={<TeacherEducationTable/>}
  />;
};

export default TeacherEducation;
