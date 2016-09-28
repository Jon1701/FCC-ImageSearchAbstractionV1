// React.
import React from 'react';

import Results from './Results.jsx';

// Requests.
var request = require('superagent');

export default class Search extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);

    // Default state.
    this.state = {
      latestResults: null // Most recent search results.
    };

    // Bind methods to component instance.
    this.submitSearch = this.submitSearch.bind(this);
    this.makeRequest = this.makeRequest.bind(this);

  };

  // Helper function to send request to server.
  makeRequest(q, pageNum) {

    // Maintain a reference to this component.
    var thisComp = this;

    // Access the /search enpoint, send search query and page number.
    request
      .get('/search')
      .query({ q: q, page: pageNum})
      .end(function(err, res) {

        // Store search results in component state.
        thisComp.setState({
          latestResults: JSON.parse(res.text)
        });

      });// End request.
  };

  // Submit search terms to the server.
  submitSearch(e) {

    // Prevent default actions.
    e.preventDefault();

    // Get the input field containing search terms.
    var searchBox = document.getElementById('search-box');

    // Get the search query, and the page number.
    var q = searchBox.value;
    var pageNum = 1;

    // Send request to server.
    this.makeRequest(q, pageNum);

  };

  // Component render.
  render() {
    return (
      <div>
        <div className="panel boxshadow">
          <div>
            Search
          </div>

          <div>
            <form id="form-search">
              <input id="search-box" type="text" defaultValue='star trek'/>
              <button type="submit" onClick={this.submitSearch}>Search</button>
            </form>
          </div>

        </div>

        <Results results={this.state.latestResults} makeRequest={this.makeRequest}/>
      </div>
    );
  };
};
