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
    expect(isEditing.value).toBeFalsy();
  });

  it("should apply", () => {
    const isEditing: { value: boolean } = { value: false };
    const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
      isEditing.value = newIsEditing.value;
    });
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      data = newData;
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
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Геометрия");
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
});
