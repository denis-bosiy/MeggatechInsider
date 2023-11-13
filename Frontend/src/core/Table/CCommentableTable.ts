import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CCommentableTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public addComment(teacherId: string): void {
    // TODO: При реализации добаваления комментариев добавить функциональность
  }

  public clone(): CCommentableTable {
    return new CCommentableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type
    );
  }
}
