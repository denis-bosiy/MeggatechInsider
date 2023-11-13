import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CSyllabusContinuableTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public continueSyllabusByWeekNumber(id: string, weekNumber: number): void {
    //
  }

  public clone(): CSyllabusContinuableTable {
    return new CSyllabusContinuableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type
    );
  }
}
