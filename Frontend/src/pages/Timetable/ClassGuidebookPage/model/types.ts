type Guidebook = Array<ClassGuidebookData>

type ClassGuidebookData = {
    class_id: string,
    data: {
      group_id: string,
      subjectName: string,
      hoursPerWeekDistributed: number,
      hoursPerWEekPlanned: number,
      hoursDebt: number,
      overWorkedHours: number
    }[]
  }

export {
  type ClassGuidebookData,
  type Guidebook
};
