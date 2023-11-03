import React from "react";
import IconButton from "../../../../../components/IconButton/IconButton";
import "./TypesContractsTable.scss";
import {useDispatch, useSelector} from "react-redux";
import {GarbageIcon} from "../../../../../icons";
import {TypesContractsItem} from "../model/types";
import {TypesContractsActionBuilder} from "../model/actions";

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
  const items = useSelector(
    (state: { typesContractsStore: TypesContractsItem[] }) => state.typesContractsStore
  );
  const dispatch = useDispatch();

  return <table className="table">
    <thead className="header">
      <tr className="row">
        <th className="cell">Типы договоров</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => <tr className="row" key={item.id}>
        <td className="cell">
          <TypesContractsCell
            label={item.name}
            icon={<IconButton
              icon={<GarbageIcon />}
              small={true}
              onClick={() => dispatch(TypesContractsActionBuilder.deleteItem(item.id))}
            />}
          />
        </td>
      </tr>)}
    </tbody>
  </table>;
};

export default TypesContractsTable;
