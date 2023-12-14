type YearImplementationMonitoringPageData = {
  dates: string[];
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

type Teacher = {
  name: string;
  type: string;
  subjects: Subject[];
  hoursPerWeek: number;
  remoteHours: number;
  combinedHours: number;
};

export {
  type YearImplementationMonitoringPageData,
  type Group,
  type Subject,
  type Teacher
};
