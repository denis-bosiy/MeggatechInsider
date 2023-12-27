import React, { useState, useLayoutEffect } from "react";
import { ScheduleComponent } from "./Schedule";
import { ScheduleBuilder } from "../../core/Schedule/ScheduleBuilder";
import { ISchedule } from "../../core/Schedule/ISchedule";

export const ScheduleContainerComponent = () => {
  const [schedules] = useState<ISchedule[]>([ScheduleBuilder.BuildSchedule()]);

  const handleDeleteLesson = (lessonId: string) => {
    console.log("Удаление урока с id =", lessonId);
  };

  return <ScheduleComponent schedule={schedules[0]} handleDeleteLesson={handleDeleteLesson} />;
};
