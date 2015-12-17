var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  getInitialState: function() {
      return {
          verse: "So do not fear, for I am with you;",
          reference: "Isa 4:5"
      };
  },
  getRandomVerse: function () {
    $.get('/api/random', function(data) {
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
  },
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
    )
  }
});

ReactDOM.render(<Hello title='Page'/>, document.getElementById('app'));
