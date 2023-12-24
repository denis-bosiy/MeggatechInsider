import {useSelector} from "react-redux";
import {FinalReportPageData} from "./model/types";
import {useState} from "react";
import {CTableBuilder} from "../../../core/Table/CTableBuilder";
import {CTableManager} from "../../../core/Table/CTableManager";
import {TableType} from "../../../core/Table/TableType";
import {SortingOrder} from "../../../core/Table/SortingOrder";

function useTableData() {
  const data = useSelector((
    state: {
      finalReportPageStore: FinalReportPageData,
    }) =>
    state.finalReportPageStore);

  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState<FinalReportPageData>(
    structuredClone(data)
  );
  const tableBuilder = new CTableBuilder(tableData, setTableData);
  tableBuilder.addExportFeature();
  tableBuilder.addSearchFeature();
  const tableManager = new CTableManager(tableBuilder.getTable());

  const handleSearch = (): void => {
    tableManager.invokeFunction("search", TableType.Searchable, [searchQuery, data]);
  };

  const handleSort = (columnName: string): void => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const handleExport = () => {
    tableManager.invokeFunction("export", TableType.Exportable, ["https://ya.ru"]);
  };

  return {
    state: {
      searchQuery,
      tableData,
    },
    actions: {
      setSearchQuery,
      handleSearch,
      handleSort,
      handleExport,
    },
  };
}

export {
  useTableData,
};
