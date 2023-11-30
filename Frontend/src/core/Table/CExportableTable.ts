import { HttpService } from "../../api/http.service";
import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CExportableTable extends CTable {
  private _httpService = new HttpService();

  constructor(_table: CTable | undefined, _data: any[], _setData: (data: any[]) => void, _type: TableType) {
    super(_table, _data, _setData, _type);
  }

  public export(url: string): void {
    // TODO: Прикрутить принудительную загрузку скачанного контента
    this._httpService.getByArbitraryUrl(url);
  }
}
