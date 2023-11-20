import React from "react";
import AgreementModalView from "../../components/AgreementModalView/AgreementModalView";
import { CTable } from "./CTable";
import { TableType } from "./TableType";
import { HttpService } from "../../api/http.service";

export class CManagableTable extends CTable {
  private _isAdding: { value: boolean };
  private _setIsAdding: ({ value }: { value: boolean }) => void;
  private _httpService = new HttpService();

  constructor(
    _table: CTable | undefined,
    _data: any[],
    _setData: (data: any[]) => void,
    _type: TableType,
    __isAdding: { value: boolean },
    __setIsAdding: ({ value }: { value: boolean }) => void
  ) {
    super(_table, _data, _setData, _type);
    this._isAdding = __isAdding;
    this._setIsAdding = __setIsAdding;
  }

  public add(valueToAdd: any): void {
    if (this._isAdding.value) {
      return;
    }
    this._setIsAdding({ ...this._isAdding, value: true });
    this.setData([...this.data, valueToAdd]);
  }

  public applyAdding(
    saveToStore: (data: any[]) => void,
    url?: string,
    buildRequestClass?: (data: any, year: number) => any,
    year?: number
  ): void {
    if (!this._isAdding.value) {
      return;
    }
    if (url && buildRequestClass && year) {
      this._httpService
        .postByArbitraryUrl(url, buildRequestClass(this.data[this.data.length - 1], year))
        .then(() => saveToStore(this.data));
    }
    this._setIsAdding({ ...this._isAdding, value: false });
  }

  public delete(
    id: string,
    saveToStore: (data: any[]) => void,
    openModal: (heading: string, content: React.ReactNode) => void,
    url = ""
  ): void {
    const proceedAction = (): void => {
      this.setData(this.data.filter((value: any) => value.id !== id));
      const params: Map<string, string> = new Map<string, string>();
      params.set("id", id);
      this._httpService.deleteByArbitraryUrl(url, params).then(() => saveToStore(this.data));
    };
    openModal("Удалить", <AgreementModalView proceedAction={proceedAction} />);
  }
}
