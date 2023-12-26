import { CManagableTable } from "../../core/Table/CManagableTable";
import { TableType } from "../../core/Table/TableType";

describe("CManagableTable", () => {
  it("should add", () => {
    const isAdding: { value: boolean } = { value: false };
    const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {
      isAdding.value = newIsAdding.value;
    });
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      data = newData;
    });
    const table: CManagableTable = new CManagableTable(
      undefined,
      data,
      setData,
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

  it("should not able to add twice", () => {
    const isAdding: { value: boolean } = { value: false };
    const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {
      isAdding.value = newIsAdding.value;
    });
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      data = newData;
    });
    const table: CManagableTable = new CManagableTable(
      undefined,
      data,
      setData,
      TableType.Managable,
      isAdding,
      setIsAdding
    );

    table.add("Русский язык");
    table.add("Геометрия");

    expect(setIsAdding.mock.calls.length).toBe(1);
    expect(isAdding.value).toBeTruthy();
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Русский язык");
    expect(table.data.length).toBe(1);
    expect(table.data[0]).toBe("Русский язык");
  });

  it("should not able to apply adding when not any adding has happened", () => {
    const isAdding: { value: boolean } = { value: false };
    const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {
      isAdding.value = newIsAdding.value;
    });
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      data = newData;
    });
    let storeData: any[] = [];
    const setStoreData = jest.fn((newStoreData: any[]) => {
      storeData = newStoreData;
    });
    const table: CManagableTable = new CManagableTable(
      undefined,
      data,
      setData,
      TableType.Managable,
      isAdding,
      setIsAdding
    );

    table.applyAdding(setStoreData);

    expect(setIsAdding.mock.calls.length).toBe(0);
    expect(isAdding.value).toBeFalsy();
    expect(data.length).toBe(0);
    expect(table.data.length).toBe(0);
    expect(storeData.length).toBe(0);
  });

  it("should apply adding", () => {
    const isAdding: { value: boolean } = { value: false };
    const setIsAdding = jest.fn((newIsAdding: { value: boolean }) => {
      isAdding.value = newIsAdding.value;
    });
    let data: any[] = [];
    const setData = jest.fn((newData: any[]) => {
      data = newData;
    });
    let storeData: any[] = [];
    const setStoreData = jest.fn((newStoreData: any[]) => {
      storeData = newStoreData;
    });
    const table: CManagableTable = new CManagableTable(
      undefined,
      data,
      setData,
      TableType.Managable,
      isAdding,
      setIsAdding
    );

    table.add("Русский язык");
    table.applyAdding(setStoreData);

    expect(setIsAdding.mock.calls.length).toBe(2);
    expect(isAdding.value).toBeFalsy();
    expect(data.length).toBe(1);
    expect(data[0]).toBe("Русский язык");
    expect(table.data.length).toBe(1);
    expect(table.data[0]).toBe("Русский язык");
    expect(storeData.length).toBe(1);
    expect(storeData[0]).toBe("Русский язык");
  });
});
