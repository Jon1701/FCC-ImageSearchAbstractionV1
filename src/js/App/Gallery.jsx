// React
import React from 'react';

export default class Gallery extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);
  };

  // Component render.
  render() {

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
          <div key={key}>
            <a href={result.link} target="blank">
              <img src={result.link}/>
            </a>
          </div>
        );
      }); // End map.
    };

    return (
      <div id="section-gallery">
        {html}
      </div>
    );

  };
};
