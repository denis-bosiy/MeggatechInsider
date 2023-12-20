import { CurriculumReportData } from "./types";

const initData: CurriculumReportData = {
  startingDayNumber: 1,
  dayCount: 31,
  teachers: [
    {
      teacher: "Иванов Иван Иванович",
      subjects: [
        {
          title: "История",
          classes: [
            {
              number: "10-1",
              groups: [
                {
                  number: "10-1-1",
                  amount: 0,
                  combined: 0,
                  remoted: 12,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  number: "10-1-2",
                  amount: 0,
                  combined: 0,
                  remoted: 12,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              ]
            }
          ]
        },
        {
          title: "Алгоритмы",
          classes: [
            {
              number: "10-1",
              groups: [
                {
                  number: "10-1-1",
                  amount: 0,
                  combined: 0,
                  remoted: 12,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  number: "10-1-2",
                  amount: 0,
                  combined: 0,
                  remoted: 12,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      teacher: "Рыбкин Анатолий Николаевич",
      subjects: [
        {
          title: "Java",
          classes: [
            {
              number: "10-1",
              groups: [
                {
                  number: "10-1-1",
                  amount: 0,
                  combined: 0,
                  remoted: 12,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const cirruculumReportReducer = (state = initData) => {
  return state;
};

export { cirruculumReportReducer };
