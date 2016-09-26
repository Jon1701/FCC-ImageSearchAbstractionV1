// React.
import React from 'react';

// Requests.
var request = require('superagent');

export default class Search extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);

    // Bind methods to component instance.
    this.submitSearch = this.submitSearch.bind(this);
  };

  // Submit search terms to the server.
  submitSearch(e) {

    // Prevent default actions.
    e.preventDefault();

    // Get the input field containing search terms.
    var searchBox = document.getElementById('search-box');

    // Get the input field containing the page number.
    var pageBox = document.getElementById('page-box');

    // Get the search query, and the page number.
    var q = searchBox.value;
    var pageNum = pageBox.value;

    // Maintain a reference to this component.
    var thisComp = this;

    // Access the /search enpoint, send search query and page number.
    request
      .get('/search')
      .query({ q: q, page: pageNum})
      .end(function(err, res) {

        // Store results in parent state.
        thisComp.props.updateSearchResults(JSON.parse(res.text));

      });

  };

  // Component render.
  render() {
    return (
      <div className="panel boxshadow">
        <div>
          Search
        </div>
        <div>
          <form id="form-search">
            <input id="search-box" type="text" defaultValue='star trek'/>
            <input id="page-box" type="text" defaultValue="1"/>
            <button type="submit" onClick={this.submitSearch}>Search</button>
          </form>
        </div>
      </div>
    );
  };
};
