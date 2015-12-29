import React from 'react'

export default class Share extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <button className="button-primary">FB</button>
        </div>
      </div>
    );
  }
};
