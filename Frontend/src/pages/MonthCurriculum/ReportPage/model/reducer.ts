import { CurriculumReportData } from "./types";

const initData: CurriculumReportData = {
  startingDayNumber: 1,
  dayCount: 31,
  teachers: [
    {
      teacher: "Гусарова Л.Г.",
      subjects: [
        {
          title: "Геометрия",
          classes: [
            {
              number: "10-1",
              groups: [
                {
                  number: "10-1",
                  amount: 1,
                  combined: 0,
                  remoted: 0,
                  hours: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
              ]
            }
          ]
        },
      ]
    },
    {
      teacher: "Охотников С.А.",
      subjects: [
        {
          title: "АиП",
          classes: [
            {
              number: "10-1-1",
              groups: [
                {
                  number: "10-1-1",
                  amount: 2,
                  combined: 0,
                  remoted: 0,
                  hours: [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      teacher: "Логинова М.Ю.",
      subjects: [
        {
          title: "ОБЖ",
          classes: [
            {
              number: "10-1",
              groups: [
                {
                  number: "10-1",
                  amount: 2,
                  combined: 0,
                  remoted: 0,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      teacher: "Руденко Е.В.",
      subjects: [
        {
          title: "Английский язык",
          classes: [
            {
              number: "10-2-2",
              groups: [
                {
                  number: "10-2-2",
                  amount: 1,
                  combined: 0,
                  remoted: 0,
                  hours: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
