type Guidebook = Array<ClassGuidebookData>;

type ClassGuidebookGroupData = {
  groupId: string;
  hoursPerWeekDistributed: number;
  hoursPerWeekPlanned: number;
  hoursDebt: number;
  overWorkedHours: number;
};

type ClassGuidebookSubjectData = {
  subjectName: string;
  groupsData: ClassGuidebookGroupData[];
};

type ClassGuidebookData = {
  classId: string;
  subjectsData: ClassGuidebookSubjectData[];
};

export { type Guidebook, type ClassGuidebookData, type ClassGuidebookSubjectData, type ClassGuidebookGroupData };
