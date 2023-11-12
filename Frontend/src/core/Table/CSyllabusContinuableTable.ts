import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CSyllabusContinuableTable extends CTable {
  constructor(_table: CTable, _data: any[], _type: TableType) {
    super(_table, _data, _type);
  }

  public continueSyllabusByWeekNumber(id: string, weekNumber: number): void {}
}
