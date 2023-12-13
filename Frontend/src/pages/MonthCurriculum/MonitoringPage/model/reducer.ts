import { CurriculumMonitoringData } from "./types";

const initData: CurriculumMonitoringData = {
  monitoring: [
    {
      teacher: "Иванов Иван Иванович",
      total: 100,
      totalCombined: 100,
      totalRemoted: 100,
      contracts: [
        {
          subject: "ШЮП. История. Старт",
          type: "ДС",
          totalHours: 50,
          remoteHours: 100,
          combinedHours: 100,
          classes: [11]
        },
        {
          subject: "ШЮП. JAVA. Старт",
          type: "ДОП ЕГЭ",
          totalHours: 50,
          remoteHours: 100,
          combinedHours: 100,
          classes: [10, 11]
        }
      ]
    },
    {
      teacher: "Абаков Иван Иванович",
      total: 100,
      totalCombined: 100,
      totalRemoted: 100,
      contracts: [
        {
          subject: "ШЮП. История. Старт",
          type: "ДС",
          totalHours: 50,
          remoteHours: 100,
          combinedHours: 100,
          classes: [11]
        }
      ]
    }
  ]
};

const cirruculumMonitoringReducer = (state = initData) => {
  return state;
};

export { cirruculumMonitoringReducer };
