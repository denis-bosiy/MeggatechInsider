export type FinancingSetting = {
  id: string;
  subjectFinancing: string;
}

export type CategorySetting = {
  id: string;
  subjectsCategory: string;
}

export type IsBasisSetting = {
  id: string;
  basisCategory: string;
}

export type DepthTypeSetting = {
  id: string;
  depthType: string;
  depthCoefficient: number;
}

export type TypeSetting = {
  id: string;
  subjectType: string;
  basisType: string;
  depthType: string;
}

export type SettingsData = {
  financingSettings: FinancingSetting[];
  categorySetting: CategorySetting[];
  isBasisSetting: IsBasisSetting[];
  depthTypeSetting: DepthTypeSetting[];
  typeSetting: TypeSetting[];
} 



