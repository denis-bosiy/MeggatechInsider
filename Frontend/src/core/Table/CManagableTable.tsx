import React from "react";
import AgreementModalView from "../../components/AgreementModalView/AgreementModalView";
import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CManagableTable extends CTable {
  private _isAdding: { value: boolean };
  private _setIsAdding: ({ value }: { value: boolean }) => void;

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

  public applyAdding(saveToStore: (data: any[]) => void): void {
    if (!this._isAdding.value) {
      return;
    }
    saveToStore(this.data);
    console.log("Отправка запроса на бэкенд");
    // Использование RequestBuilder-a(прокидывается this.data)
    this._setIsAdding({ ...this._isAdding, value: false });
  }

  public delete(
    id: string,
    saveToStore: (data: any[]) => void,
    openModal: (heading: string, content: React.ReactNode) => void
  ): void {
    const proceedAction = (): void => {
      this.setData(this.data.filter((value: any) => value.id !== id));
      saveToStore(this.data);
      console.log("Отправка запроса на бэкенд");
      // Использование RequestBuilder-a(прокидывается id. id на бэкенде и id на фронте должны быть одними и теми же)
    };
    openModal("Удалить", <AgreementModalView proceedAction={proceedAction} />);
  }

  public clone(): CManagableTable {
    return new CManagableTable(
      this.table ? this.table.clone() : undefined,
      structuredClone(this.data),
      this.setData,
      this.type,
      this._isAdding,
      this._setIsAdding
    );
  }
}
