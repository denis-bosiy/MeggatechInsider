type YearImplementationMonitoringPageData = {
  months: string[];
  teachers: Teacher[];
};

type Group = {
  name: string;
  hoursPlanned: number;
  doneHours: number[];
  totalDoneHours: number;
  doneDistanceHours: number;
  doneCombinedHours: number;
};

type Subject = {
  name: string;
  classes: Group[];
};

type AdditionalLoad = {
  id: string;
  name: string;
  doneHours: number[];
  isEditing: boolean;
};

type Teacher = {
  id: string;
  name: string;
  type: string;
  subjects: Subject[];
  hoursPerWeek: number;
  remoteHours: number;
  combinedHours: number;
  additionalLoads: AdditionalLoad[];
};

export {
  type YearImplementationMonitoringPageData,
  type Group,
  type Subject,
  type AdditionalLoad,
  type Teacher
};
