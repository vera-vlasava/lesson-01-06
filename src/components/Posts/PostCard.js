import React from "react";
import {Link} from "react-router-dom";

const PostCard = ({ post }) => {

    return (
        <div className="col-6 ">
            <div className="card">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-body">
                    <p className="card-text">{post.short}</p>
                    <h5 className="card-text">
                        Author: { post.person ? `${post.person.l_name} ${post.person.f_name[0].toUpperCase()}` : "No Name" }
                    </h5>
                </div>
                <div className="card-action"> <Link to={`/posts/${post.id}`}> Read more ... </Link> </div>
            </div>
        </div>
    );
};

export default PostCard;
