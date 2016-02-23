import React from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router'

class PostShow extends React.Component {

  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }

  onDeleteClick(){
    this.props.deletePost(this.props.paramas.id)
      .then(() => {
        this.context.router.push('/')
      })
  }

  render(){
    let post = this.props.post

    if(!post){
      return <div>..loading</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <buton
          className="btn btn-danger pull-xs-right"
          onclick={this.onDeleteClick.bind(this)}>
          Deletete post
        </buton>
        <h3>title {post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }

}

PostShow.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(state){
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)
