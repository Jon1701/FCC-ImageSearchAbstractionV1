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

    // Get the text box.
    var textbox = document.querySelector('#form-search > input[type=text]');

    // Get the search query.
    var q = textbox.value;

    request
      .get('/search')
      .query({ query: q})
      .end(function(err, res) {

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
            <input type="text" defaultValue='hello world'/>
            <button type="submit" onClick={this.submitSearch}>Search</button>
          </form>
        </div>
      </div>
    );
  };
};
