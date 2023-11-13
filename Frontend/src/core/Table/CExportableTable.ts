import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CExportableTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public export(): void {
    //
  }

  public clone(): CExportableTable {
    return new CExportableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type
    );
  }
}
