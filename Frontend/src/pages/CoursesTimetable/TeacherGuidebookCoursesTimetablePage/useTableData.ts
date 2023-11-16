import {useSelector} from "react-redux";
import {TeacherGuidebookCoursesTimetablePageData} from "./model/types";
import {useCallback, useMemo, useState} from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [isEdited, setIsEdited] = useState<{ value: boolean }>({ value: false });

  const teacherGuidebookCoursesTimetableTableBuilder: CTableBuilder = useMemo(
    () => {
      const builder = new CTableBuilder(
        tableData,
        setTableData
      );
      builder.addSearchFeature();
      builder.addEditFeature(isEdited, setIsEdited);
      return builder;
    },
    [],
  );

  const teacherGuidebookCoursesTimetableTable: CTable = useMemo(
    () => teacherGuidebookCoursesTimetableTableBuilder.getTable(),
    [teacherGuidebookCoursesTimetableTableBuilder],
  );
  const teacherGuidebookCoursesTimetableTableManager: CTableManager = useMemo(
    () => new CTableManager(teacherGuidebookCoursesTimetableTable),
    [teacherGuidebookCoursesTimetableTable],
  );

  const handleSort = useCallback((columnName: string) => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction(
      "sort",
      TableType.Default,
      [columnName, SortingOrder.Ascending],
    );
  }, []);

  const handleSearch = useCallback((searchValue: string) => {
    teacherGuidebookCoursesTimetableTableManager.invokeFunction(
      "search",
      TableType.Searchable,
      [searchValue, data]);
  }, []);

  return {
    state: {
      data: tableData,
      isEdited: isEdited.value,
      searchValue,
    },
    actions: {
      handleSort,
      handleSearch: () => handleSearch(searchValue),
      setIsEdited: (isEdited: boolean) => setIsEdited({value: isEdited}),
      setSearchValue,
    },
  };
}

export {
  useTableData,
};
