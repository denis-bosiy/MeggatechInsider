import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CEditableTable extends CTable {
  private _isEditing: boolean;

  constructor(
    _table: CTable | undefined,
    _data: any[],
    _setData: (data: any[]) => void,
    _type: TableType,
    __isEditing = false
  ) {
    super(_table, _data, _setData, _type);
    this._isEditing = __isEditing;
  }

  public edit(): void {
    this._isEditing = true;
  }

  public apply(saveToStore: (data: any[]) => void): void {
    if (!this._isEditing) {
      return;
    }
    saveToStore(this.data);
    console.log("Отправка запроса на бэкенд");
    this._isEditing = false;
  }

  public cancel(storeData: any[]): void {
    if (!this._isEditing) {
      return;
    }
    this.setData(storeData);
    this._isEditing = false;
  }

  public clone(): CEditableTable {
    return new CEditableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type,
      this._isEditing
    );
  }
}
