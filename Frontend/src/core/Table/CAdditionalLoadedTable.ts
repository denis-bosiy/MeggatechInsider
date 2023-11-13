import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CAdditionalLoadedTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public addAdditionalLoaded(teacherId: string): void {
    // TODO: При реализации добавления доп. нагрузки добавить функциональность
  }

  public clone(): CAdditionalLoadedTable {
    return new CAdditionalLoadedTable(this.table ? this.table.clone() : undefined, this.data, this.setData, this.type);
  }
}
