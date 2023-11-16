import {useSelector} from "react-redux";
import {TeacherGuidebookCoursesTimetablePageData} from "./model/types";
import {useState} from "react";
import {CTableBuilder} from "../../../core/Table/CTableBuilder";
import {CTable} from "../../../core/Table/CTable";
import {CTableManager} from "../../../core/Table/CTableManager";
import {TableType} from "../../../core/Table/TableType";
import {SortingOrder} from "../../../core/Table/SortingOrder";

function useTableData() {
  const data = useSelector((state: {
    teacherGuidebookCoursesTimetablePageStore: TeacherGuidebookCoursesTimetablePageData
  }) => state.teacherGuidebookCoursesTimetablePageStore);

  const [tableData, setTableData] = useState(structuredClone(data));
  const [isEdited, setIsEdited] = useState(false);

  const teacherGuidebookCoursesTimetableTableBuilder: CTableBuilder = new CTableBuilder(
    tableData,
    setTableData
  );
  teacherGuidebookCoursesTimetableTableBuilder.addSearchFeature();
  teacherGuidebookCoursesTimetableTableBuilder.addEditFeature({
    value: isEdited,
  }, ({value}) => setIsEdited(value));

  const teacherGuidebookCoursesTimetableTable: CTable = teacherGuidebookCoursesTimetableTableBuilder.getTable();
  const teacherGuidebookCoursesTimetableTableManager: CTableManager = new CTableManager(teacherGuidebookCoursesTimetableTable);

  const handleSort = (columnName: string): void => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction(
      "sort",
      TableType.Default,
      [columnName, SortingOrder.Ascending],
    );
  };

  const handleSearch = (searchValue: string): void => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction(
      "search",
      TableType.Searchable,
      [searchValue, data]);
  };

  return {
    state: {
      data: tableData,
      isEdited,
    },
    actions: {
      handleSort,
      handleSearch,
      setIsEdited,
    },
  };
}

export {
  useTableData,
};
