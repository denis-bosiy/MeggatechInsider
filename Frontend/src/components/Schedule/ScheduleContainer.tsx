import React, { useState } from "react";
import { ScheduleComponent } from "./Schedule";
import { ScheduleBuilder } from "../../core/Schedule/ScheduleBuilder";
import { ISchedule } from "../../core/Schedule/ISchedule";

export const ScheduleContainerComponent = () => {
  const [schedules] = useState<ISchedule[]>([ScheduleBuilder.BuildSchedule()]);

  return <ScheduleComponent schedule={schedules[0]} />;
};
