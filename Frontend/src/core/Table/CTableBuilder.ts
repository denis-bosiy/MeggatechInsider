import { TableType } from "./TableType";
import { CTable } from "./CTable";
import { CAdditionalLoadedTable } from "./CAdditionalLoadedTable";
import { CCommentableTable } from "./CCommentableTable";
import { CEditableTable } from "./CEditableTable";
import { CExportableTable } from "./CExportableTable";
import { CManagableTable } from "./CManagableTable";
import { CSyllabusContinuableTable } from "./CSyllabusContinuableTable";
import { CSearchableTable } from "./CSearchableTable";

export class CTableBuilder {
  private _table: CTable;

  constructor(data: any[], setData: (data: any[]) => void) {
    this._table = new CTable(undefined, data, setData);
  }

  public addAdditionalLoadFeature(): void {
    this._table = new CAdditionalLoadedTable(
      this._table,
      this._table.data,
      this._table.setData,
      TableType.AdditionalLoaded
    );
  }

  public addCommentFeature(): void {
    this._table = new CCommentableTable(this._table, this._table.data, this._table.setData, TableType.Commentable);
  }

  public addEditFeature(isEditing: { value: boolean }, setIsEditing: ({ value }: { value: boolean }) => void): void {
    this._table = new CEditableTable(
      this._table,
      this._table.data,
      this._table.setData,
      TableType.Editable,
      isEditing,
      setIsEditing
    );
  }

  public addExportFeature(): void {
    this._table = new CExportableTable(this._table, this._table.data, this._table.setData, TableType.Exportable);
  }

  public addManageFeature(isAdding: { value: boolean }, setIsAdding: ({ value }: { value: boolean }) => void): void {
    this._table = new CManagableTable(
      this._table,
      this._table.data,
      this._table.setData,
      TableType.Managable,
      isAdding,
      setIsAdding
    );
  }

  public addSearchFeature(): void {
    this._table = new CSearchableTable(this._table, this._table.data, this._table.setData, TableType.Searchable);
  }

  public addSyllabusContinueFeature(): void {
    this._table = new CSyllabusContinuableTable(
      this._table,
      this._table.data,
      this._table.setData,
      TableType.SyllabusContinuable
    );
  }

  public getTable(): CTable {
    return this._table;
  }
}
