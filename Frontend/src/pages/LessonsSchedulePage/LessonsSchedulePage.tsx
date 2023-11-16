import React, { useContext } from "react";
import { ScheduleComponent } from "../../components/Schedule/Schedule";
import { useDispatch, useSelector } from "react-redux";
import { ISchedule } from "../../core/Schedule/ISchedule";
import { ActionBuilder } from "./model/actions";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import AgreementModalView from "../../components/AgreementModalView/AgreementModalView";

const LessonsSchedulePage = (): JSX.Element => {
  const schedule: ISchedule = useSelector((state: { lessonsScheduleStore: ISchedule }) => state.lessonsScheduleStore);
  const dispatch = useDispatch();
  const { openModal } = useContext(ModalSettingsContext);

  const handleDeleteLesson = (lessonId: string): void => {
    openModal("Удалить", <AgreementModalView proceedAction={() => dispatch(ActionBuilder.deleteLesson(lessonId))} />);
  };

  console.log(schedule);
  return (
    <>
      <ScheduleComponent schedule={schedule} handleDeleteLesson={handleDeleteLesson} />
    </>
  );
};

export default LessonsSchedulePage;
