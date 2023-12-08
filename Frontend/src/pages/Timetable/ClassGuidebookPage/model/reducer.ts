import { Guidebook } from "./types";

const initData: Guidebook = [
  {
    classId: "class10",
    subjectsData: [
      {
        subjectName: "Физика",
        groupsData: [
          {
            groupId: "10-1",
            hoursPerWeekDistributed: 0,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-2",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-3",
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
            groupId: "10-1",
            hoursPerWeekDistributed: 0,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-2",
            hoursPerWeekDistributed: 3,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-3",
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
            groupId: "10-1",
            hoursPerWeekDistributed: 3,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-2",
            hoursPerWeekDistributed: 1,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "10-3",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 1
          }
        ]
      }
    ]
  },
  {
    classId: "class11",
    subjectsData: [
      {
        subjectName: "Физика",
        groupsData: [
          {
            groupId: "11-1",
            hoursPerWeekDistributed: 0,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "11-2",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
          },
          {
            groupId: "11-3",
            hoursPerWeekDistributed: 2,
            hoursPerWeekPlanned: 2,
            hoursDebt: 0,
            overWorkedHours: 0
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
