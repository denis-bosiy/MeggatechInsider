import { CTable } from "./CTable";
import { TableType } from "./TableType";

export class CEditableTable extends CTable {
  private _isEditing: { value: boolean };
  private _setIsEditing: ({ value }: { value: boolean }) => void;

  constructor(
    _table: CTable | undefined,
    _data: any[],
    _setData: (data: any[]) => void,
    _type: TableType,
    __isEditing: { value: boolean },
    __setIsEditing: ({ value }: { value: boolean }) => void
  ) {
    super(_table, _data, _setData, _type);
    this._isEditing = __isEditing;
    this._setIsEditing = __setIsEditing;
  }

  public edit(): void {
    if (this._isEditing.value) {
      return;
    }

    this._setIsEditing({ ...this._isEditing, value: true });
  }

  public apply(saveToStore: (data: any[]) => void, url = ""): void {
    if (!this._isEditing.value) {
      return;
    }
    saveToStore(this.data);
    console.log("Отправка запроса на бэкенд = " + url);
    // Использование RequestBuilder-a(прокидывается this.data)
    this._setIsEditing({ ...this._isEditing, value: false });
  }

  public cancel(storeData: any[]): void {
    if (!this._isEditing.value) {
      return;
    }
    this.setData(storeData);
    this.data = storeData;
    this._setIsEditing({ ...this._isEditing, value: false });
  }
}
