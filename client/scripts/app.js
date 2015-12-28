import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

import Share from './share';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verse: '', reference: '' };
    this.getRandomVerse = this.getRandomVerse.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column test">
            <h4>{this.props.title}</h4>
            <p className="verse">{this.state.verse}</p>
            <p className="reference">{this.state.reference}</p>
          </div>
        </div>
        <div className="row">
          <input onClick={this.getRandomVerse} className="button-primary" type="button" value="Next verse"/>
        </div>
        <div className="row">
          <Share />
        </div>
      </div>
    );
  }
  getRandomVerse() {
    $.getJSON('/api/v1.0/verse/random/', function(data) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
    }.bind(this));
  }
  componentDidMount() {
    this.getRandomVerse();
  }
};

render((
  <App title='Main'/>
), document.getElementById('app'));
