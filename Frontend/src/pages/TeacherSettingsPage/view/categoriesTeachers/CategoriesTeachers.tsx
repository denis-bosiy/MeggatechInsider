import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {Pluse} from "../../../../icons";
import CategoriesTeachersTable from "./table/CategoriesTeachersTable";
import CommonContent from "../common/CommonContent";

const CategoriesTeachers = () => {
  return <CommonContent
    button={<ActionButton label="Добавить" type={ActionButtonType.Warning} icon={<Pluse />} />}
    table={<CategoriesTeachersTable/>}
  />;
};

export default CategoriesTeachers;
