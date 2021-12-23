import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";

interface Props {
  comments: string[];
}
const _CommentList = ({ comments }: Props) => {
  const renderComments = () => {
    return comments.map((comment: string) => <li key={comment}>{comment}</li>);
  };
  return (
    <div>
      <h3>Comment List</h3>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateOfProp = ({ comments }: StoreState): { comments: string[] } => {
  return { comments };
};
export const CommentList = connect(mapStateOfProp)(_CommentList);
