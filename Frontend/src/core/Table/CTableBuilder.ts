import { TableType } from "./TableType";
import { CTable } from "./CTable";
import { CAcademicQuartersTable } from "./CAcademicQuartersTable";
import { CAdditionalLoadedTable } from "./CAdditionalLoadedTable";
import { CCommentableTable } from "./CCommentableTable";
import { CEditableTable } from "./CEditableTable";
import { CExportableTable } from "./CExportableTable";
import { CManagableTable } from "./CManagableTable";
import { CSyllabusContinuableTable } from "./CSyllabusContinuableTable";
import { CSearchableTable } from "./CSearchableTable";

export class CTableBuilder {
  static GetTable(data: any[], setData: (data: any[]) => void, types: TableType[]): CTable {
    let table: CTable = new CTable(undefined, data, setData);

    types.forEach((tableType: TableType) => {
      switch (tableType) {
        case TableType.AcademicQuarters:
          table = new CAcademicQuartersTable(table, data, setData, TableType.AcademicQuarters);
          break;
        case TableType.AdditionalLoaded:
          table = new CAdditionalLoadedTable(table, data, setData, TableType.AdditionalLoaded);
          break;
        case TableType.Commentable:
          table = new CCommentableTable(table, data, setData, TableType.Commentable);
          break;
        case TableType.Editable:
          table = new CEditableTable(table, data, setData, TableType.Editable);
          break;
        case TableType.Exportable:
          table = new CExportableTable(table, data, setData, TableType.Exportable);
          break;
        case TableType.Managable:
          table = new CManagableTable(table, data, setData, TableType.Managable);
          break;
        case TableType.Searchable:
          table = new CSearchableTable(table, data, setData, TableType.Searchable);
          break;
        case TableType.SyllabusContinuable:
          table = new CSyllabusContinuableTable(table, data, setData, TableType.SyllabusContinuable);
          break;
        default:
          break;
      }
    });

    return table;
  }
}
