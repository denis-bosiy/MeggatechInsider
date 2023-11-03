import React from "react";
import ActionButton, {ActionButtonType} from "../../../../components/ActionButton/ActionButton";
import {Pluse} from "../../../../icons";
import CommonContent from "../common/CommonContent";
import TypesContractsTable from "./table/TypesContractsTable";

const TypesContracts = () => {
  return <CommonContent
    button={<ActionButton label="Добавить" type={ActionButtonType.Warning} icon={<Pluse />} />}
    table={<TypesContractsTable/>}
  />;
};

export default TypesContracts;
