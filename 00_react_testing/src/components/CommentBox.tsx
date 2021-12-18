import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment } from "actions/commentAction";
interface Props {
  saveComment(comment: string): void;
}
const _CommentBox = ({ saveComment }: Props) => {
  const [comment, setComment] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(e.target.value);
  };
  // const onSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
  //   e.preventDefault();
  //   setComment("");
  // };
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    saveComment(comment);
    setComment("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={onChangeHandler} />
      <div>
        {/* <button onClick={onSubmit}>Submit</button> */}
        <button>Submit</button>
      </div>
    </form>
  );
};

export const CommentBox = connect(null, { saveComment })(_CommentBox);
