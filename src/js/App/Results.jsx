// React
import React from 'react';
import classNames from 'classnames';

export default class Results extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);

    // Bind methods to component instance.
    this.previousResults = this.previousResults.bind(this);
    this.nextResults = this.nextResults.bind(this);
  };

  // Handler to get the next page of search results from the server.
  previousResults() {

    // Get current page number and query.
    var page = this.props.results.page;
    var query = this.props.results.q;

    // Logic to prevent page number from going negative.
    if (page-1 <= 0) {

      // If the previous page will become less than or equal to zero, reset
      // page to page 1.
      page = 1;

    } else {

      // If the previous page is still positive, decrement page number by 1.
      page = page - 1;

    };

    // Send request to imgur to get previous page of data.
    this.props.makeRequest(query, page);

  };

  // Handler to get the next page of search results from the server.
  nextResults() {

    // Get current page number and query.
    var page = this.props.results.page;
    var query = this.props.results.q;

    // Send request to imgur to get next page of data.
    this.props.makeRequest(query, page+1);

  };

  // Component render.
  render() {

    // Component classes.
    var myClasses = classNames({
      'hidden': this.props.results == null  // Hide if no search was made.
    });

    // Variable to store rendered search results.
    var html;

    // If search results are present, build an array of cards
    // containing images returned by the search.
    if (this.props.results) {

      // Unwrap this.props.results.
      var results = this.props.results.results;         // Array of results.
      var num_results = this.props.results.num_results; // Number of results.
      var page = this.props.results.page;               // Current page number.
      var query = this.props.results.q;                 // Search terms.

      // Build array of cards containing images returned by search.
      html = results.map((result, idx, arr) => {

        // Unique key for this image.
        var key = idx + '_' + result.link;

        // Return HTML.
        return (
          <div key={key} className="panel boxshadow clear-margin col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <a href={result.link} target="blank">
              <img src={result.link} className="img-responsive thumbnail"/>
            </a>
          </div>
        );
      }); // End map.
    };

    return (
      <div className={myClasses}>

        <div className="panel boxshadow text-center">
          Displaying {num_results} matching images on page {page}.
        </div>

        <div className="panel boxshadow">
          <button onClick={this.previousResults}>Previous</button>
          <button onClick={this.nextResults}>Next</button>
        </div>

        <div>
          {html}
        </div>

      </div>
    );
  };
};
