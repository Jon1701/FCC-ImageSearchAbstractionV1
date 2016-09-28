// React
import React from 'react';

export default class PaginationControls extends React.Component {

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
    return (
      <div className="pagination-controls panel boxshadow nopadding">
        <button className="btn-pagination" onClick={this.previousResults}><i className="icon icon-arrow-left"></i> Previous</button>
        <button className="btn-pagination" onClick={this.nextResults}><i className="icon icon-arrow-right"></i> Next</button>
      </div>
    );
  };
};
