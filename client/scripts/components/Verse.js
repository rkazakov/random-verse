import React from 'react'

import history from './history'

export default class Verse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verse: '', reference: '' };
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column text">
            <span className="verse">{this.state.verse}</span>
            <span className="reference"> ({this.state.reference})</span>
          </div>
        </div>
        <div className="row">
          <input onClick={this.getPrev} type="button" value="Back"/>
          <input onClick={this.getNext} className="button button-primary" type="button" value="Next"/>
        </div>
      </div>
    );
  }
  getPrev() {
    // TODO: use React Router history to implement back action
    history.goBack();
  }
  getNext() {
    let id = this.props.params.id;
    console.log(id);
    let url = id ? '/api/v1.0/verse/' + id : '/api/v1.0/verse/';
    $.getJSON(url, function(data) {
      this.setState({
        verse: data.text,
        reference: data.reference
      });
      //location.hash = data.cid;
    }.bind(this));

    /*$.getJSON('/api/v1.0/verse', function(data) {
      //history.replaceState(null, '/verse/' + data.cid);
      //location.hash = "#value";
    }.bind(this));*/
  }
  componentDidMount() {
    this.getNext();
  }
};
