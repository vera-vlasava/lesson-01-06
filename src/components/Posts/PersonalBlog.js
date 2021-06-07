import React, { useContext } from "react";
import { GlobalContext } from "../App";

const PersonalBlog = ({ personId }) => {
  const { posts } = useContext(GlobalContext);
  const personalPosts = posts.filter((p) => p.personId === personId);
  const renderBlog = () => {
    if (!personalPosts.length) {
      return <h3>Ooops...</h3>;
    }
    return personalPosts.map((post) => (
      <div key={post.id} className="card">
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.short}</p>
        </div>
      </div>
    ));
  };
  return <div className="container">{renderBlog()}</div>;
};

export default PersonalBlog
