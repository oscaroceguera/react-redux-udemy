import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router'


class PostIndex extends React.Component {
	componentWillMount(){
		this.props.fetchPosts()
	}

  renderPost(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <srtong>{post.title}</srtong>
          </Link>
        </li>
      )
    })
  }

	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className='btn btn-primary'>
						Add Post
					</Link>
				</div>
				<h3>Posts</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    posts : state.posts.all
  }
}

//{fetchPosts} is equal to { fetchPosts: fetchPosts }
export default connect(mapStateToProps, { fetchPosts })(PostIndex)
