export type BasicSettingsData = {
  basicSettings: TSetting[];
  salarySettings: TSetting[];
};

export type TSetting = {
  label: string;
  value: string;
};
