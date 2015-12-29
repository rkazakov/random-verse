import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

// Components
import Home from './Home';
import Verse from './Verse';
import Share from './Share';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
};

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='verse' component={Verse} />
      <Route path='verse/:id' component={Verse} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));
