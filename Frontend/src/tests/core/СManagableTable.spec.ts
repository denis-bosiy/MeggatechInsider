import { CManagableTable } from "../../core/Table/CManagableTable";
import { TableType } from "../../core/Table/TableType";

describe("CManagableTable", () => {
  it("should add", () => {
    const isAdding: { value: boolean } = { value: false };
    const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {});
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
        data = newData;
    });
    const table: CManagableTable = new CManagableTable(
      undefined,
      data,
      () => {},
      TableType.Managable,
      isAdding,
      setIsAdding
    );

    table.add("Русский язык");

    expect(setIsAdding.mock.calls.length).toBe(1);
    expect(isAdding.value).toBeTruthy();
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Русский язык");
    expect(table.data.length).toBe(1);
    expect(table.data[0]).toBe("Русский язык");
  });

  //   it("should add", () => {
  //     const isAdding: { value: boolean } = { value: false };
  //     const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {
  //         isAdding.value = newIsAdding.value;
  //     });
  //     const table: CManagableTable = new CManagableTable(
  //       undefined,
  //       [],
  //       () => {},
  //       TableType.Editable,
  //       isAdding,
  //       setIsAdding
  //     );

  //     table.edit();

  //     expect(setIsEditing.mock.calls.length).toBe(1);
  //     expect(isEditing.value).toBeTruthy();
  //   });

  //   it("should apply", () => {
  //     const isEditing: { value: boolean } = { value: false };
  //     const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
  //       isEditing.value = newIsEditing.value;
  //     });
  //     let data: any[] = [];
  //     const setData = jest.fn((newData: any[]) => {
  //       data = newData;
  //     });
  //     const table: CEditableTable = new CEditableTable(
  //       undefined,
  //       ["Геометрия"],
  //       () => {},
  //       TableType.Editable,
  //       isEditing,
  //       setIsEditing
  //     );

  //     table.edit();
  //     table.apply(setData);

  //     expect(setIsEditing.mock.calls.length).toBe(2);
  //     expect(isEditing.value).toBeFalsy();
  //     expect(setData.mock.calls.length).toBe(1);
  //     expect(data.length).toBe(1);
  //     expect(data[0]).toBe("Геометрия");
  //   });

  //   it("should cancel", () => {
  //     const isEditing: { value: boolean } = { value: false };
  //     const setIsEditing = jest.fn((newIsEditing: { value: boolean }) => {
  //       isEditing.value = newIsEditing.value;
  //     });
  //     let data: any[] = ["Геометрия"];
  //     const setData = (newData: any[]) => {
  //       data = newData;
  //     };
  //     const table: CEditableTable = new CEditableTable(
  //       undefined,
  //       data,
  //       setData,
  //       TableType.Editable,
  //       isEditing,
  //       setIsEditing
  //     );

  //     table.edit();
  //     table.cancel(["Русский язык"]);

  //     expect(setIsEditing.mock.calls.length).toBe(2);
  //     expect(isEditing.value).toBeFalsy();
  //     expect(table.data.length).toBe(1);
  //     expect(table.data[0]).toBe("Русский язык");
  //     expect(data.length).toBe(1);
  //     expect(data[0]).toBe("Русский язык");
  //   });
});
