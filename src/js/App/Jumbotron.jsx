// React
import React from 'react';

export default class Jumbotron extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  };

  // Component render.
  render() {
    return (
      <div className="jumbotron panel boxshadow">
        <h1 className="text-center">Imgur Search Service</h1>
      </div>
    );
  };
};
