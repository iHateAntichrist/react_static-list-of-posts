import React from 'react';
import { UserInfo } from '../UserInfo';
// import { CommentInfo } from '../CommentInfo';
import { Post } from '../../types/posts';
import { CommentList } from '../CommentList';
import comments from '../../api/comments';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {(post.user && <UserInfo user={post.user} />)}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    )}
    <hr />
  </div>
);