import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CSearchableTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public search(text: string): void {
    //
  }

  public clone(): CSearchableTable {
    return new CSearchableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type
    );
  }
}
