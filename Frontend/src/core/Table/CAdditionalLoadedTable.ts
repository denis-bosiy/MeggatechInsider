import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CAdditionalLoadedTable extends CTable {
  constructor(_table: CTable, _data: any[], _type: TableType) {
    super(_table, _data, _type);
  }

  public addAdditionalLoaded(teacherId: string): void {}
}
