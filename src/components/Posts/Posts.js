import React, {useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/act_posts";
import PostCard from "./PostCard";



const Posts = ({ posts }) => {
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(getPosts())
        }, [])

    const renderPosts = () => {
        if (!posts.length) {
            return <h1>No posts</h1>;
        }
        return (
            <div className="row">
                {posts.map( (post) => {
                    return (
                        <PostCard key={post.id} post={post} />
                    );
                })}
            </div>
        );
    };

    return <div className="container">{renderPosts()}</div>;
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.list,
    };
};

export default connect(mapStateToProps, null)(Posts);
