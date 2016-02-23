import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import PostIndex from './components/posts-index'
import PostNew from './components/post-new.jsx'
import PostShow from './components/post-show.jsx'

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={PostIndex} />
	  <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>

);
