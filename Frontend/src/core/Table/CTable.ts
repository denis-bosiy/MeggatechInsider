import { TableType } from "./TableType";
import { SortingOrder } from "./SortingOrder";
import { IPrototype } from "../IPrototype";

export class CTable implements IPrototype {
  public table?: CTable;
  public type: TableType;
  public data: any[];

  public setData: (data: any[]) => void;

  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType = TableType.Default) {
    this.table = _table;
    this.data = _data;
    this.setData = _setData;
    this.type = _type;
  }

  public sort(sortingColumnName: string, sortingOrder: SortingOrder): void {
    const ascendingOrderSort = (a: any, b: any): number => {
      return a[sortingColumnName] < b[sortingColumnName] ? -1 : 0;
    };
    const descendingOrderSort = (a: any, b: any): number => {
      return a[sortingColumnName] >= b[sortingColumnName] ? -1 : 0;
    };

    if (sortingOrder === SortingOrder.Ascending) {
      this.data.sort(ascendingOrderSort);
    } else if (sortingOrder === SortingOrder.Descending) {
      this.data.sort(descendingOrderSort);
    }

    this.setData([...this.data]);
  }

  public clone(): CTable {
    return new CTable(this.table ? this.table.clone() : undefined, structuredClone(this.data), this.setData, this.type);
  }
}
