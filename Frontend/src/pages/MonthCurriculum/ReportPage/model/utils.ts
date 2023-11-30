import { CurriculumReportData, ReportTeacher } from "./types";

export const summarizeTeacherTotal = (teacher: ReportTeacher) => {
  let total = 0;
  let combinedTotal = 0;
  let remoteTotal = 0;

  teacher.subjects.forEach((subject) => {
    subject.classes.forEach((classItem) => {
      classItem.groups.forEach((group) => {
        total += group.amount;
        combinedTotal += group.combined;
        remoteTotal += group.remoted;
      });
    });
  });

  return { total, remoteTotal, combinedTotal };
};
