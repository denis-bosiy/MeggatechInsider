import { CEditableTable } from "../../core/Table/CEditableTable";
import { TableType } from "../../core/Table/TableType";

describe("CEditableTable", () => {
  it("should edit", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    const table: CEditableTable = new CEditableTable(
      undefined,
      [],
      () => {},
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.edit();

    expect(setIsEditing.mock.calls.length).toBe(1);
    expect(isEditing.value).toBeTruthy();
  });

  it("should have edit function, that is idempotant", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    const table: CEditableTable = new CEditableTable(
      undefined,
      [],
      () => {},
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.edit();
    table.edit();

    expect(setIsEditing.mock.calls.length).toBe(1);
    expect(isEditing.value).toBeTruthy();
  });

  it("should apply", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    let storeData: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      storeData = newData;
    });
    const table: CEditableTable = new CEditableTable(
      undefined,
      ["Геометрия"],
      () => {},
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.edit();
    table.apply(setData);

    expect(setIsEditing.mock.calls.length).toBe(2);
    expect(isEditing.value).toBeFalsy();
    expect(setData.mock.calls.length).toBe(1);
    expect(storeData.length).toBe(1);
    expect(storeData[0]).toBe("Геометрия");
  });

  it("should not apply before editing has been started", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    let storeData: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      storeData = newData;
    });
    const table: CEditableTable = new CEditableTable(
      undefined,
      ["Геометрия"],
      () => {},
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.apply(setData);

    expect(setIsEditing.mock.calls.length).toBe(0);
    expect(isEditing.value).toBeFalsy();
    expect(setData.mock.calls.length).toBe(0);
    expect(storeData.length).toBe(0);
  });

  it("should cancel", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    let data: any[] = ["Геометрия"];
    const setData = (newData: any[]) => {
      data = newData;
    };
    const table: CEditableTable = new CEditableTable(
      undefined,
      data,
      setData,
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.edit();
    table.cancel(["Русский язык"]);

    expect(setIsEditing.mock.calls.length).toBe(2);
    expect(isEditing.value).toBeFalsy();
    expect(table.data.length).toBe(1);
    expect(table.data[0]).toBe("Русский язык");
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Русский язык");
  });

  it("should not cancel before editing has been started", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    let data: any[] = ["Геометрия"];
    const setData = (newData: any[]) => {
      data = newData;
    };
    const table: CEditableTable = new CEditableTable(
      undefined,
      data,
      setData,
      TableType.Editable,
      isEditing,
      setIsEditing
    );

    table.cancel(["Русский язык"]);

    expect(setIsEditing.mock.calls.length).toBe(0);
    expect(isEditing.value).toBeFalsy();
    expect(table.data.length).toBe(1);
    expect(table.data[0]).toBe("Геометрия");
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Геометрия");
  });
});
