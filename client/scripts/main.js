var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column test">
            <h4>{this.props.title}</h4>
            <p className="verse">So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.</p>
            <p className="reference">{this.props.reference}</p>
          </div>
        </div>
        <div className="row">
          <input className="button-primary" type="button" value="Next verse" />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Hello title='Page' reference='Isaiah 41:10' />, document.getElementById('app'));
