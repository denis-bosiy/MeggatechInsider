import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CAdditionalLoadedTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public addAdditionalLoaded(): void {
    // params: teacherId: string
    // TODO: При реализации добавления доп. нагрузки добавить функциональность
  }
}
