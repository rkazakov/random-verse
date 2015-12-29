import React from 'react'

export default class Verse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verse: '', reference: '' };
    this.getRandomVerse = this.getRandomVerse.bind(this);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="one-half column test">
            <p className="verse">{this.state.verse}</p>
            <p className="reference">{this.state.reference}</p>
          </div>
        </div>
        <div className="row">
          <input type="button" value="Back"/>
          <input onClick={this.getRandomVerse} className="button-primary" type="button" value="Next"/>
        </div>
      </div>
    );
  }
  getRandomVerse() {
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
    this.getRandomVerse();
  }
};
