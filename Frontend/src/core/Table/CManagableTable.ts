import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CManagableTable extends CTable {
  private _isAdding: boolean = false;
  private _columnNamesAbleToEditing: string[];

  constructor(_table: CTable, _data: any[], _type: TableType, columnNamesAbleToEditing: string[]) {
    super(_table, _data, _type);
    this._columnNamesAbleToEditing = columnNamesAbleToEditing;
  }

  public add(): void {}
  public applyAdding(): void {}
  public delete(id: string): void {}
}
