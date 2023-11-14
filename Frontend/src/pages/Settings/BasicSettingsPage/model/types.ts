export type BasicSettingsData = {
  basicSettings: TSetting[];
  salarySettings: TSetting[];
};

export type TSetting = {
  id: string;
  label: string;
  value: string;
};
