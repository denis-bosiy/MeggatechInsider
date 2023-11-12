import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CTableManager {
  private _table: CTable;

  constructor(table: CTable) {
    this._table = table;
  }

  public invokeFunction(name: string, type: TableType, params: any[]): void {
    while(this._table.type !== type) {
      // this._table = this._table.table;
    }
    this._table[name]?.(params);
  }
  public changeValue(key: string, name: string): void {}
}
