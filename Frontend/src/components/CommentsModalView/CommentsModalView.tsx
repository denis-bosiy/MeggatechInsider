import React, { useState } from "react";
import Button, { ButtonType } from "../Button/Button";
import "./CommentsModalView.scss";
import Input from "../Input/Input";
import Comment from "../Comment/Comment";

interface ICommentsModalViewProps {
  comments: {
    text: string;
    deleteAction: () => void;
  }[];
  addAction: () => void;
}

const CommentsModalView = (props: ICommentsModalViewProps) => {
  const [commentValue, setCommentValue] = useState<string>("");

  const onAddButtonClick = () => {
    props.addAction();
    setCommentValue("");
  };
  const commentsCards: React.JSX.Element[] = props.comments.map(
    (
      comment: {
        text: string;
        deleteAction: () => void;
      },
      index: number
    ) => (
      <div key={index}>
        <Comment text={comment.text} deleteAction={comment.deleteAction} />
      </div>
    )
  );

  return (
    <div className="x-cmv">
      <div className="x-cmv__comments-list">
        <Input value={commentValue} placeholder="Введите комментарий" onValueChange={setCommentValue} />
        {commentsCards}
      </div>
      <div className="x-cmv__save-button">
        <Button label="Добавить" type={ButtonType.Primary} onClick={onAddButtonClick} />
      </div>
    </div>
  );
};

export default CommentsModalView;
