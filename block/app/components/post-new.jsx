import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions'
import { Link } from 'react-router'

class PostNew extends Component {

  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        // bolg post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push
        // new path ro navigate to
        this.context.router.push('/')
      })
  }

	render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input className="text" className="form-control" {...title}/>
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input className="text" className="form-control" {...categories}/>
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="text" className="form-control" {...content}/>
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
		)
	}
}

PostNew.contextTypes = {
  router: React.PropTypes.object,
};


function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = '* Este campo es requerido'
  }
  if(!values.categories){
    errors.categories = 'Enter categories'
  }
  if(!values.content){
    errors.content = 'Enter content'
  }

  return errors
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm : 1st is from config, 2nd is mapStateProps, 3rd is mapDispatchToProps

export default reduxForm({
  form : 'PostsNewForm',
  fields : ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew)

// user types something in ... record it on application state
// state === {
//   form: {
//     PostNewForm: {
//       title: '....',
//       categories: '....',
//       content: '....'
//     }
//   }
// }
