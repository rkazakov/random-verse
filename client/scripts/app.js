import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

let Main = React.createClass({
  render: function() {
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
          <input onClick={this.handleClick} className="button-primary" type="button" value="Next verse"/>
        </div>
      </div>
    );
  },
  getInitialState: function() {
      return {
          verse: '',
          reference: ''
      };
  },
  getRandomVerse: function() {
    $.getJSON('/api/v1.0/verse/random/', function(data) {
      if (this.isMounted()) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
      }
    }.bind(this));
  },
  componentDidMount: function() {
    this.getRandomVerse();
  },
  handleClick: function() {
    this.getRandomVerse();
  }
});

render(
  <Main title='Page'/>,
  document.getElementById('app')
);
