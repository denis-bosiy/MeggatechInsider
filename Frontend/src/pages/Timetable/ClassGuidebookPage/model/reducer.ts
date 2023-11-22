import { ClassGuidebookData, Guidebook } from "./types";

const initData: Guidebook = [
  // {
  //   class_id: "10",
  //   data: [
  //     "1": {
  //       group_id: "1",
  //       subjectName: "Физика",
  //       hoursPerWeekDistributed: 0,
  //       hoursPerWEekPlanned: 2,
  //       hoursDebt: 0,
  //       overWorkedHours: 2
  //     },
  //     {
  //       group_id: "1",
  //       subjectName: "Физика",
  //       hoursPerWeekDistributed: 0,
  //       hoursPerWEekPlanned: 2,
  //       hoursDebt: 0,
  //       overWorkedHours: 2
  //     }
  //   ]
  // }
];

const teacherGuidebookTimetablePageReducer = (state = initData) => {
  return state;
};

export { teacherGuidebookTimetablePageReducer };
