import { useDispatch, useSelector } from "react-redux";
import { TeacherGuidebookCoursesTimetableData, TeacherGuidebookCoursesTimetablePageData } from "./model/types";
import { useState } from "react";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { TeacherGuidebookCoursesTimetableActionBuilder } from "./model/actions";

function useTableData() {
  const pageData = useSelector(
    (state: { teacherGuidebookCoursesTimetablePageStore: TeacherGuidebookCoursesTimetablePageData }) =>
      state.teacherGuidebookCoursesTimetablePageStore
  );

  const [tableData, setTableData] = useState(structuredClone(pageData.data));
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState<{ value: boolean }>({ value: false });

  const teacherGuidebookCoursesTimetableTableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  teacherGuidebookCoursesTimetableTableBuilder.addSearchFeature();
  teacherGuidebookCoursesTimetableTableBuilder.addEditFeature(isEdited, setIsEdited);

  const teacherGuidebookCoursesTimetableTable: CTable = teacherGuidebookCoursesTimetableTableBuilder.getTable();
  const teacherGuidebookCoursesTimetableTableManager: CTableManager = new CTableManager(
    teacherGuidebookCoursesTimetableTable
  );

  const handleSort = (columnName: string) => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction("sort", TableType.Default, [
      columnName,
      SortingOrder.Ascending
    ]);
  };

  const handleSearch = (searchValue: string) => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction("search", TableType.Searchable, [
      searchValue,
      pageData.data
    ]);
  };

  const dispatch = useDispatch();
  const handleSave = () => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction("apply", TableType.Editable, [
      (data: TeacherGuidebookCoursesTimetableData[]) =>
        dispatch(TeacherGuidebookCoursesTimetableActionBuilder.setData(data))
    ]);
  };
  const handleReset = () => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction("cancel", TableType.Editable, [pageData.data]);
  };
  const handleEdit = () => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction("edit", TableType.Editable, []);
  };

  const setAvailableTimes = (courseId: string, availableTimes: string[]) => {
    setTableData(
      tableData.map((item: TeacherGuidebookCoursesTimetableData) => {
        if (item.id === courseId) {
          return {
            ...item,
            availableTimes
          };
        }
        return item;
      })
    );
  };

  return {
    state: {
      availableTimes: pageData.availableTimes,
      tableData: tableData,
      isEdited: isEdited.value,
      searchValue
    },
    actions: {
      handleSort,
      handleSearch: () => handleSearch(searchValue),
      handleSave,
      handleReset,
      handleEdit,
      setSearchValue,
      setAvailableTimes
    }
  };
}

export { useTableData };
