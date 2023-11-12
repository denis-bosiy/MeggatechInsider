import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CEditableTable extends CTable {
  private _isEditing: boolean = false;
  private _columnNamesAbleToEditing: string[];

  constructor(_table: CTable, _data: any[], _type: TableType, columnNamesAbleToEditing: string[]) {
    super(_table, _data, _type);
    this._columnNamesAbleToEditing = columnNamesAbleToEditing;
  }

  public edit(): void {}
  public apply(): void {}
  public cancel(): void {}
}
