import React, { useContext, useLayoutEffect } from "react";
import { ScheduleComponent } from "../../../components/Schedule/Schedule";
import { useDispatch, useSelector } from "react-redux";
import { ISchedule } from "../../../core/Schedule/ISchedule";
import { ActionBuilder } from "./model/actions";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import AgreementModalView from "../../../components/AgreementModalView/AgreementModalView";
import { ScheduleNotifier } from "../../../core/Schedule/ScheduleNotifier";
import { ScheduleSubscriber } from "../../../core/Schedule/ScheduleSubscriber";
import { ScheduleNavigationLesson } from "../../../components/ScheduleNavigation/ScheduleNavigation";
import { ScheduleConverter } from "../../../core/Schedule/ScheduleConverter";
import { ScheduleLesson } from "../../../core/Schedule/ScheduleLesson";
import { Schedule } from "../../../core/Schedule/Schedule";
import { ScheduleEvent } from "../../../core/Schedule/ScheduleEvent";

const LessonsSchedulePage = (): JSX.Element => {
  const schedule: ISchedule = useSelector((state: { lessonsScheduleStore: ISchedule }) => state.lessonsScheduleStore);
  const dispatch = useDispatch();
  const { openModal } = useContext(ModalSettingsContext);

  const handleDeleteLesson = (lessonId: string): void => {
    openModal("Удалить", <AgreementModalView proceedAction={() => dispatch(ActionBuilder.deleteLesson(lessonId))} />);
  };

  useLayoutEffect(() => {
    ScheduleNotifier.getInstance().subscribe(
      new ScheduleSubscriber((navigationLesson: ScheduleNavigationLesson) => {
        schedule.removeLesson(navigationLesson.id);
        ScheduleConverter.ConvertFromNavigationLessonToLessons(navigationLesson, schedule as Schedule).forEach(
          (lesson: ScheduleLesson) => {
            schedule.addLesson(lesson);
          }
        );
        dispatch(ActionBuilder.setSchedule(schedule as Schedule));
      }, ScheduleEvent.StoppedLessonEditing)
    );
  }, []);

  return (
    <>
      <ScheduleComponent schedule={schedule} handleDeleteLesson={handleDeleteLesson} />
    </>
  );
};

export default LessonsSchedulePage;
