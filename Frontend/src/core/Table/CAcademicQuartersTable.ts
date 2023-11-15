import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CAcademicQuartersTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public clearQuarter(id: string, quarterNumber: number): void {
    // TODO: При реализации учебного плана добавить очистку четверти
  }
}
