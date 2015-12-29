import React from 'react'

export default class Verse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verse: '', reference: '' };
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="one-half column text">
            <p className="verse">{this.state.verse}</p>
            <p className="reference">{this.state.reference}</p>
          </div>
        </div>
        <div className="row">
          <input onClick={this.getPrev} type="button" value="Back"/>
          <input onClick={this.getNext} className="button-primary" type="button" value="Next"/>
        </div>
      </div>
    );
  }
  getPrev() {
    // TODO: use React Router history to implement back action
  }
  getNext() {
    let id = this.props.params.id;
    let url = id ? '/api/v1.0/verse/' + id : '/api/v1.0/verse';
    $.getJSON(url, function(data) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
    }.bind(this));
  }
  componentDidMount() {
    this.getNext();
  }
};
