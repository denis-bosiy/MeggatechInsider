import React from "react";
import "./Comment.scss";
import { CrossIcon } from "../../icons";
import IconButton from "../IconButton/IconButton";

interface ICommentProps {
  text: string;
  deleteAction: () => void;
}

const Comment = (props: ICommentProps) => {
  return (
    <div className="comment">
      {props.text}
      <IconButton className="comment__delete-button" icon={<CrossIcon />} onClick={props.deleteAction}></IconButton>
    </div>
  );
};

export default Comment;
