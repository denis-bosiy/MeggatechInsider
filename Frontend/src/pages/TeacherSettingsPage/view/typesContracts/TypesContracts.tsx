import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {Pluse} from "../../../../icons";
import CommonContent from "../common/CommonContent";
import TypesContractsTable from "./table/TypesContractsTable";
import {useDispatch} from "react-redux";
import {TypesContractsActionBuilder} from "./model/actions";

const TypesContracts = () => {
  const dispatch = useDispatch();

  return <CommonContent
    button={<ActionButton
      label="Добавить"
      type={ActionButtonType.Warning}
      icon={<Pluse />}
      onClick={() => dispatch(TypesContractsActionBuilder.addItem("New"))}
    />}
    table={<TypesContractsTable/>}
  />;
};

export default TypesContracts;
