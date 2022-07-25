import React from 'react';
import Comment from 'components/Comment';
import { CommentListProps } from './CommentList.types';

const CommentList = ({ comments }: CommentListProps) => (
  <>
    {comments.map((comment) => (
      <Comment key={`comment-${comment.id}`} comment={comment} />
    ))}
  </>
);

export default CommentList;
