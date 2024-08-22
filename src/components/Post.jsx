import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="posts_container mx-5 my-4">
      <ul className="list_group">
        {posts.map((post) => {
          return (
            <li
              className="border border-gray-300 p-2 text-[1rem]"
              key={post.id}
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;
