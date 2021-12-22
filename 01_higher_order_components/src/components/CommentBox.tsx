import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions/commentAction";
import { requireAuth } from "components/requireAuth";

interface Props {
  saveComment(comment: string): void;
  fetchComments(): void;
}
const _CommentBox = ({ saveComment, fetchComments }: Props, Props: Props) => {
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
    <>
      <form onSubmit={handlerSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={onChangeHandler} />
        <div>
          {/* <button onClick={onSubmit}>Submit</button> */}
          <button>Submit</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch Comments
      </button>
    </>
  );
};

// const mapStateOfProps = ({ auth }: StoreState): { auth: boolean } => {
//   return {
//     auth,
//   };
// };

export const CommentBox = connect(null, {
  saveComment,
  fetchComments,
})(requireAuth(_CommentBox));
