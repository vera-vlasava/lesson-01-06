import {connect} from "react-redux"

const PersonalBlog = ({ personalPosts }) => {

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

const mapStateToProps = state => {
  return {
    personalPosts: state.posts.list
  }
}

export default connect(mapStateToProps, null)(PersonalBlog)
