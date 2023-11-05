import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {PlusIcon} from "../../../../icons";
import CategoriesTeachersTable from "./table/CategoriesTeachersTable";
import CommonContent from "../common/CommonContent";
import {useDispatch} from "react-redux";
import {CategoriesTeachersActionBuilder} from "./model/actions";

const CategoriesTeachers = () => {
  const dispatch = useDispatch();

  return <CommonContent
    button={<ActionButton
      label="Добавить"
      type={ActionButtonType.Warning}
      icon={<PlusIcon />}
      onClick={() => dispatch(CategoriesTeachersActionBuilder.addItem("New", 0.3))}
    />}
    table={<CategoriesTeachersTable/>}
  />;
};

export default CategoriesTeachers;
