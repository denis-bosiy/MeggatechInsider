import React, {useCallback, useContext} from "react";
import {ScheduleComponent} from "../../../components/Schedule/Schedule";
import {ISchedule} from "../../../core/Schedule/ISchedule";
import {useDispatch, useSelector} from "react-redux";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import AgreementModalView from "../../../components/AgreementModalView/AgreementModalView";
import {ActionBuilder} from "./model/actions";

const LessonsScheduleCoursesTimetablePage = () => {
  const schedule: ISchedule = useSelector((state: {
    lessonsScheduleCoursesTimetablePageStore: ISchedule,
  }) => state.lessonsScheduleCoursesTimetablePageStore);

  const dispatch = useDispatch();
  const { openModal } = useContext(ModalSettingsContext);

  const handleDeleteLesson = useCallback((lessonId: string): void => {
    openModal("Удалить", <AgreementModalView proceedAction={() => dispatch(ActionBuilder.deleteCourse(lessonId))} />);
  }, []);

  return (
    <>
      <ScheduleComponent schedule={schedule} handleDeleteLesson={handleDeleteLesson} />
    </>
  );
};

export default LessonsScheduleCoursesTimetablePage;
