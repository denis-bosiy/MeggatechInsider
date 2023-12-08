import React, {Fragment} from "react";
import Input, {InputType} from "../../../components/Input/Input";
import {useTableData} from "./useTableData";
import {GroupGuidebookCoursesTimetablePageData} from "./model/types";
import "./GroupGuidebookCoursesTimetablePage.scss";
import {classNames} from "../../../utils/classNames";

interface TableProps {
  data: GroupGuidebookCoursesTimetablePageData,
  handleSort: (columnName: string) => void,
}

const Table = ({
  data,
  handleSort,
}: TableProps) => {
  const rows = data.map((group) => (
    <tr className="row" key={group.id}>
      <td className="cell">
        {group.name}
      </td>
      <td className="cell">{group.type}</td>
      {group.groups.map((item) => <Fragment key={item.id}>
        <td className={classNames(
          "cell" +
          (item.distributedHoursToPlan < item.hoursToPlan ? " -error" : "") +
          (item.distributedHoursToPlan > item.hoursToPlan ? " -warning" : "")
        )}>
          {item.distributedHoursToPlan}
        </td>
        <td className="cell">{item.hoursToPlan}</td>
        <td className="cell">{item.creditHours}</td>
      </Fragment>)}
    </tr>
  ));

  return <>
    <thead className="header">
      <tr className="row">
        <th
          className="cell -filter"
          onClick={() => handleSort("name")}
          rowSpan={2}
        >
          Курс
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("type")}
          rowSpan={2}
        >
          Тип
        </th>
        {!!data.length && data[0].groups.map((group) => <th
          key={group.id}
          className="cell"
          colSpan={3}
        >
          {group.name}
        </th>)}
      </tr>
      <tr className="row">
        {!!data.length && data[0].groups.map((group) => <Fragment key={group.id}>
          <th
            className="cell -filter"
            onClick={() => handleSort("distributedHoursToPlan")}
          >
            Часов в нед. распр-но
          </th>
          <th
            className="cell -filter"
            onClick={() => handleSort("hoursToPlan")}
          >
            Часов в нед. по плану
          </th>
          <th
            className="cell -filter"
            onClick={() => handleSort("creditHours")}
          >
            Долг
          </th>
        </Fragment>)}
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </>;
};

const GroupGuidebookCoursesTimetablePage = () => {
  const {
    state,
    actions,
  } = useTableData();

  return (
    <>
      <div className="toolbar group-guidebook_float_right">
        <Input
          className="toolbar__search"
          value={state.searchValue}
          type={InputType.Search}
          placeholder="Поиск"
          onValueChange={actions.setSearchValue}
          onSearch={actions.handleSearch}
        />
      </div>
      <table className="table">
        <Table
          data={state.data}
          handleSort={actions.handleSort}
        />
      </table>
    </>
  );
};

export default GroupGuidebookCoursesTimetablePage;
