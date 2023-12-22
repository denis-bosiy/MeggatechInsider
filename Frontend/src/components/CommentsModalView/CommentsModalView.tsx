import React, { useState } from "react";
import Button, { ButtonType } from "../Button/Button";
import "./CommentsModalView.scss";
import Input from "../Input/Input";
import { CommentData } from "../../core/Comment/Comment";
import { guidGenerator } from "../../utils/guidGenerator";
import Comment from "../Comment/Comment";
import { HttpService } from "../../api/http.service";

interface ICommentsModalViewProps {
  getUrl: string;
  putUrl: string;
  deleteUrl: string;
}

const CommentsModalView = (props: ICommentsModalViewProps) => {
  // const httpService: HttpService = new HttpService();
  const [newCommentValue, setNewCommentValue] = useState<string>("");
  const [comments, setComments] = useState<CommentData[]>([
    {
      id: guidGenerator(),
      text: "Прогульщик. Вместо пары решил пойти в бар со своими школьными друзьями. Не видать ему своей зарплаты как и счастья"
    }
  ]);

  const onAddButtonClick = () => {
    setComments([...comments, { id: guidGenerator(), text: newCommentValue }]);
    setNewCommentValue("");
    // httpService.putByArbitraryUrl(props.putUrl, {text: newCommentValue});
  };
  const deleteAction = (commentId: string): void => {
    setComments(comments.filter((comment: CommentData) => comment.id !== commentId));

    // const params: Map<string, string> = new Map<string, string>();
    // params.set("id", commentId);
    // httpService.deleteByArbitraryUrl(props.deleteUrl, params);
  };
  const commentsCards: React.JSX.Element[] = comments.map((comment: CommentData, index: number) => (
    <div key={index}>
      <Comment text={comment.text} deleteAction={() => deleteAction(comment.id)} />
    </div>
  ));

  return (
    <div className="x-cmv">
      <div className="x-cmv__comments-list">
        <Input value={newCommentValue} placeholder="Комментарий" onValueChange={setNewCommentValue} />
        {commentsCards}
      </div>
      <div className="x-cmv__save-button">
        <Button label="Добавить" type={ButtonType.Primary} onClick={onAddButtonClick} />
      </div>
    </div>
  );
};

export default CommentsModalView;
