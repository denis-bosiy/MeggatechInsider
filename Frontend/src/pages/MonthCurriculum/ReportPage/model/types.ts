export type CurriculumReportData = {
  startingDayNumber: number;
  dayCount: number;
  teachers: ReportTeacher[];
};

export type ReportTeacher = {
  teacher: string;
  subjects: ReportSubject[];
};

export type ReportGroup = {
  number: string;
  hours: number[];
  combined: number;
  remoted: number;
  amount: number;
};

export type ReportClass = {
  number: string;
  groups: ReportGroup[];
};

export type ReportSubject = {
  title: string;
  classes: ReportClass[];
};
