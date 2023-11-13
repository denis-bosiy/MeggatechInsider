import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CManagableTable extends CTable {
  private _isAdding = false;

  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public add(): void {
    //
  }

  public applyAdding(): void {
    //
  }

  public delete(id: string): void {
    //
  }

  public clone(): CManagableTable {
    return new CManagableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type
    );
  }
}
