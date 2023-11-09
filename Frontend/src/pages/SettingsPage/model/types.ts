export type BasicSettingsData = {
  basicSettings: { [name: string]: TSetting };
  salarySettings: TSetting[];
};

export type TSetting = {
  label: string;
  value: string;
};
