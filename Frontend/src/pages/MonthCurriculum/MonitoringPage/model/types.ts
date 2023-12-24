export type CurriculumContract = {
  type: string;
  subject: string;
  classes: number[];
  remoteHours: number;
  combinedHours: number;
  totalHours: number;
};

export type CurriculumMonitoring = {
  teacher: string;
  total: number;
  totalRemoted: number;
  totalCombined: number;
  contracts: CurriculumContract[];
};

export type CurriculumMonitoringData = {
  monitoring: CurriculumMonitoring[];
};
