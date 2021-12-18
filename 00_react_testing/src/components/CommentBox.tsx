import React, { useState } from "react";

export const CommentBox = () => {
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
