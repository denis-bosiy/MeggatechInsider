import {useSelector} from "react-redux";
import {useState} from "react";
import {CTableBuilder} from "../../../core/Table/CTableBuilder";
import {CTable} from "../../../core/Table/CTable";
import {CTableManager} from "../../../core/Table/CTableManager";
import {TableType} from "../../../core/Table/TableType";
import {SortingOrder} from "../../../core/Table/SortingOrder";
import {GroupGuidebookCoursesTimetablePageData} from "./model/types";

function useTableData() {
  const data = useSelector((state: {
    groupGuidebookCoursesTimetablePageStore: GroupGuidebookCoursesTimetablePageData
  }) => state.groupGuidebookCoursesTimetablePageStore);

  const [tableData, setTableData] = useState(structuredClone(data));
  const [searchValue, setSearchValue] = useState("");

  const groupGuidebookCoursesTimetableTableBuilder: CTableBuilder = new CTableBuilder(
    tableData,
    setTableData
  );
  groupGuidebookCoursesTimetableTableBuilder.addSearchFeature();

  const groupGuidebookCoursesTimetableTable: CTable = groupGuidebookCoursesTimetableTableBuilder.getTable();
  const groupGuidebookCoursesTimetableTableManager: CTableManager = new CTableManager(groupGuidebookCoursesTimetableTable);

  const handleSort = (columnName: string) => {
    groupGuidebookCoursesTimetableTableManager.invokeFunction(
      "sort",
      TableType.Default,
      [columnName, SortingOrder.Ascending],
    );
  };

  const handleSearch = (searchValue: string) => {
    groupGuidebookCoursesTimetableTableManager.invokeFunction(
      "search",
      TableType.Searchable,
      [searchValue, data]);
  };

  return {
    state: {
      data: tableData,
      searchValue,
    },
    actions: {
      handleSort,
      handleSearch: () => handleSearch(searchValue),
      setSearchValue,
    },
  };
}

export {
  useTableData,
};
