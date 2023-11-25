type Guidebook = Array<ClassGuidebookData>

type ClassGuidebookGroupData = {
  group_id: string,
  hoursPerWeekDistributed: number,
  hoursPerWeekPlanned: number,
  hoursDebt: number,
  overWorkedHours: number
}

type ClassGuidebookSubjectData = {
  subjectName: string,
  groupsData: ClassGuidebookGroupData[]
};

type ClassGuidebookData = {
  class_id: string,
  subjectsData: ClassGuidebookSubjectData[]
}

export {
  type Guidebook,
  type ClassGuidebookData,
  type ClassGuidebookSubjectData,
  type ClassGuidebookGroupData
};
