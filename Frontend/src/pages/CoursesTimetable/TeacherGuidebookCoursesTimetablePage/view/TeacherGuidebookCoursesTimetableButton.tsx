import ActionButton, { ActionButtonType } from "../../../../components/ActionButton/ActionButton";
import { PenIcon } from "../../../../icons";
import React from "react";

interface TeacherGuidebookTimetableButtonProps {
  isEdited: boolean;
  handleEdit: () => void;
  handleSave: () => void;
  handleReset: () => void;
}

const TeacherGuidebookCoursesTimetableButton = ({
  isEdited,
  handleEdit,
  handleSave,
  handleReset
}: TeacherGuidebookTimetableButtonProps) => {
  if (!isEdited) {
    return <ActionButton className="toolbar__button" label="Редактировать" icon={<PenIcon />} onClick={handleEdit} />;
  }
  return (
    <div className="toolbar__buttons-box">
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Positive}
        label="Сохранить"
        onClick={handleSave}
      />
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Negative}
        label="Отменить"
        onClick={handleReset}
      />
    </div>
  );
};

export default TeacherGuidebookCoursesTimetableButton;
