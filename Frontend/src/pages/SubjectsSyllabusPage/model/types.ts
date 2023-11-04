type SubjectsSyllabusPageData = Array<SubjectSyllabusData>

type SubjectSyllabusData = {
  id: number,
  subjectName: string,
  financing: string,
  type: string,
  category: string,
  surchargeForNotebooks: number,
  numberOf10: number,
  numberOfGroupsIn10: number,
  numberOf11: number,
  numberOfGroupsIn11: number,
  isFinalExam: boolean,
}

export {
  type SubjectsSyllabusPageData,
};
