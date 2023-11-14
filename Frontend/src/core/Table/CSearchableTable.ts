import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CSearchableTable extends CTable {
  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public search(searchQuery: string, dataFromStore: any[]): void {
    if (searchQuery === "") {
      this.setData(dataFromStore);
    } else {
      const lowerCasedSearchQuery: string = searchQuery.toLowerCase();
      this.setData(
        dataFromStore.filter((row: any) => Object.values(row).findIndex((value: any) => value.toLowerCase().includes(lowerCasedSearchQuery)) !== -1)
      );
    }
  }
}
