import { Guidebook } from "./types";

const initData: Guidebook = [
  {
    class_id: "class10",
    subjectsData: [
      {
        subjectName: "Физика",
        groupsData: [
          {
            group_id: "10-1",
            hoursPerWeekDistributed: 0,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-2",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-3",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          }
        ]
      },
      {
        subjectName: "История",
        groupsData: [
          {
            group_id: "10-1",
            hoursPerWeekDistributed: 0,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-2",
            hoursPerWeekDistributed: 3,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-3",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 1,
            overWorkedHours: 0
          }
        ]
      },
      {
        subjectName: "Java",
        groupsData: [
          {
            group_id: "10-1",
            hoursPerWeekDistributed: 3,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-2",
            hoursPerWeekDistributed: 1,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            group_id: "10-3",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 1
          }
        ]
      }
    ]
  }
];

const classGuidebookTimetablePageReducer = (state = initData) => {
  return state;
};

export { classGuidebookTimetablePageReducer };
