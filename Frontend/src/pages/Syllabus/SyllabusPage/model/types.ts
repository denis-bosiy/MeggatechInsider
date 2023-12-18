type SyllabusPageData = {
  types: string[],
  numberOfWeeksIn1Quarter: number,
  startOf1Quarter: string,
  numberOfWeeksIn2Quarter: number,
  startOf2Quarter: string,
  numberOfWeeksIn3Quarter: number,
  startOf3Quarter: string,
  numberOfWeeksIn4Quarter: number,
  startOf4Quarter: string,
  plan: SyllabusData
}

type SyllabusData = Array<PlanData>

type PlanData = {
  id: string,
  name: string,
  financing: string,
  type: string,
  numberOfGroups: number,
  averagePerYear: number,
  averageForPeriod: number,
  hoursTotal: number,
  hoursExpected: number,
  hoursOf1Quarter: number[],
  hoursOf2Quarter: number[],
  hoursOf3Quarter: number[],
  hoursOf4Quarter: number[]
}

export {
  type SyllabusPageData,
  type SyllabusData,
  type PlanData
};
