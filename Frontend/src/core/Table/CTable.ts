import { TableType } from "./TableType";
import { SortingOrder } from "./SortingOrder";

export class CTable {
  public table?: CTable;
  public type: TableType;
  protected data: any[];

  constructor(_table: CTable | undefined, _data: any[], _type: TableType = TableType.Default) {
    this.table = _table;
    this.data = _data;
    this.type = _type;
  }

  public sort(sortingColumnName: string, sortingOrder: SortingOrder): void {}
}
