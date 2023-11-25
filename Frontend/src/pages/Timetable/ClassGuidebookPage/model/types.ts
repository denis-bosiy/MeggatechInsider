type Guidebook = Array<ClassGuidebookData>

type ClassGuidebookData = {
  class_id: string,
  subjectsData: {
    subjectName: string,
    groupsData: {
      group_id: string,
      hoursPerWeekDistributed: number,
      hoursPerWeekPlanned: number,
      hoursDebt: number,
      overWorkedHours: number
    }[]
  }[]
}

export {
  type ClassGuidebookData,
  type Guidebook
};
