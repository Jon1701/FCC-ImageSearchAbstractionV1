// React
import React from 'react';
import classNames from 'classnames';

import PaginationControls from './PaginationControls.jsx';
import Gallery from './Gallery.jsx';


export default class Results extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  };

  // Component render.
  render() {

    // Component classes.
    var myClasses = classNames({
      'hidden': this.props.results == null  // Hide if no search was made.
    });

    return (
      <div className={myClasses}>

        <div className="hidden panel boxshadow text-center">
          Displaying {num_results} matching images on page {page}.
        </div>

        <PaginationControls results={this.props.results} makeRequest={this.props.makeRequest}/>

        <Gallery results={this.props.results}/>

      </div>
    );
  };
};
