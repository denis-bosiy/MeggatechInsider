import React from "react";
import IconButton from "../../../../../components/IconButton/IconButton";
import {GarbageIcon} from "../../../../../icons";
import "./TypesContractsTable.scss";

interface TypesContractsCellProps {
  label: string,
  icon: React.ReactNode,
}
const TypesContractsCell = ({
  label,
  icon
}: TypesContractsCellProps) => {
  return <div className="types-contracts-cell-types">
    {label}
    {icon}
  </div>;
};

const TypesContractsTable = () => {
  return <table className="table">
    <thead className="header">
      <tr className="row">
        <th className="cell">Типы договоров</th>
      </tr>
      <tr className="row -filter">
        <td className="cell">
          <TypesContractsCell label={"ГПХ"} icon={<IconButton icon={<GarbageIcon />} small={true}/>}/>
        </td>
      </tr>
      <tr className="row -filter">
        <td className="cell">
          <TypesContractsCell label={"Основной"} icon={<IconButton icon={<GarbageIcon />} small={true}/>}/>
        </td>
      </tr>
      <tr className="row -filter">
        <td className="cell">
          <TypesContractsCell label={"Совместитель"} icon={<IconButton icon={<GarbageIcon />} small={true}/>}/>
        </td>
      </tr>
    </thead>
  </table>;
};

export default TypesContractsTable;
