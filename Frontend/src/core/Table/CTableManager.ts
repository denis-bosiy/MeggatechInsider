import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CTableManager {
  private _table: CTable;

  constructor(table: CTable) {
    this._table = table;
  }

  public invokeFunction(name: string, type: TableType, params: any[]): void {
    const tables: Array<CTable | undefined> = [this._table];

    while (tables[tables.length - 1]?.type !== type && tables[tables.length - 1]) {
      const nextTable: CTable | undefined = tables[tables.length - 1]?.table;

      tables.push(nextTable);
    }

    if (tables[tables.length - 1] !== undefined) {
      //console.log(this._table);
      (this._table as any)[name].apply(this, params);
    }
    console.log(this._table);
  }

  public changeValue(key: string, value: string): void {
    // make shit
  }
}
