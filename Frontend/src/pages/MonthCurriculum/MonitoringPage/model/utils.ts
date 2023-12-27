import { CurriculumMonitoring } from "./types";

export const summarizeMonitoringTotal = (monitoring: CurriculumMonitoring) => {
  let total = 0;
  let combinedTotal = 0;
  let remoteTotal = 0;

  monitoring.contracts.forEach((contract) => {
    total += contract.totalHours;
    remoteTotal += contract.remoteHours;
    combinedTotal += contract.combinedHours;
  });

  return { total, combinedTotal, remoteTotal };
};
