import { TableType } from "./TableType";
import { CTable } from "./CTable";
import { CAcademicQuartersTable } from "./CAcademicQuartersTable";
import { CAdditionalLoadedTable } from "./CAdditionalLoadedTable";
import { CCommentableTable } from "./CCommentableTable";
import { CEditableTable } from "./CEditableTable";
import { CExportableTable } from "./CExportableTable";
import { CManagableTable } from "./CManagableTable";
import { CSyllabusContinuableTable } from "./CSyllabusContinuableTable";

export class CTableBuilder {
  static GetTable(data: any[], types: TableType[], columnNamesAbleToEditing: string[] = []): CTable {
    let table: CTable = new CTable(undefined, data);

    types.forEach((tableType: TableType) => {
      switch (tableType) {
        case TableType.AcademicQuarters:
          table = new CAcademicQuartersTable(table, data, TableType.AcademicQuarters);
          break;
        case TableType.AdditionalLoaded:
          table = new CAdditionalLoadedTable(table, data, TableType.AdditionalLoaded);
          break;
        case TableType.Commentable:
          table = new CCommentableTable(table, data, TableType.Commentable);
          break;
        case TableType.Editable:
          table = new CEditableTable(table, data, TableType.Editable, columnNamesAbleToEditing);
          break;
        case TableType.Exportable:
          table = new CExportableTable(table, data, TableType.Exportable);
          break;
        case TableType.Managable:
          table = new CManagableTable(table, data, TableType.Managable, columnNamesAbleToEditing);
          break;
        case TableType.AcademicQuarters:
          table = new CAcademicQuartersTable(table, data, TableType.AcademicQuarters);
          break;
        case TableType.SyllabusContinuable:
          table = new CSyllabusContinuableTable(table, data, TableType.SyllabusContinuable);
          break;
        case TableType.Commentable:
          table = new CCommentableTable(table, data, TableType.Commentable);
          break;
        case TableType.AdditionalLoaded:
          table = new CAdditionalLoadedTable(table, data, TableType.AdditionalLoaded);
          break;
        default:
          break;
      }
    });

    return table;
  }
}
