import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";

interface Props {
  comments: string[];
}
const _CommentList = ({ comments }: Props) => {
  return (
    <div>
      {comments.map((comment: string) => (
        <div key={comment}>{comment} </div>
      ))}
    </div>
  );
};

const mapStateOfProp = ({ comments }: StoreState): { comments: string[] } => {
  return { comments };
};
export const CommentList = connect(mapStateOfProp)(_CommentList);
