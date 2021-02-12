import React from "react";
import { useQuery } from "@apollo/client";
import { PostsDocument } from "../graphql/generated";

export const PostsList: React.FC = () => {
  const { loading, error, data } = useQuery(PostsDocument);

  if (loading || !data) return <span>loading...</span>;
  if (error) return <span>{error.message}</span>;

  return (
    <ul>
      {data.posts.map((post) => (
        <li key={post.id}>{post.body}</li>
      ))}
    </ul>
  );
};
