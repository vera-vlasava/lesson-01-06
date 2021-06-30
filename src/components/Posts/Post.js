import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostById} from "../../store/actions/act_posts";

const Post = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
    dispatch(getPostById(+id))
    }, []);

    const post = useSelector( state => {
        return state.posts.postById
    })

    return post ? (
        <div className="col-12">
            <div className="card">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-body">
                    <p className="card-text">{post.body}</p>
                    <h5 className="card-text">
                        Author: { post.person ? `${post.person.l_name} ${post.person.f_name[0].toUpperCase()}` : "No Name" }
                    </h5>
                </div>
            </div>
        </div>
    ) : ( <div className="col-12"> No posts. </div>)
};

export default Post;
