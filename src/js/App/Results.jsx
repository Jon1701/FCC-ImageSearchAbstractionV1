// React
import React from 'react';
import classNames from 'classnames';

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

    // Variable to store rendered search results.
    var html;

    // If search results are present, build an array of cards
    // containing images returned by the search.
    if (this.props.results) {

      // Unwrap this.props.results.
      var results = this.props.results.results;
      var num_results = this.props.results.num_results;
      var page = this.props.results.page;
      var query = this.props.results.q;

      // Build array of cards containing images returned by search.
      html = results.map((result, idx, arr) => {
        return (
          <div key={idx} className="panel boxshadow clear-margin col-xs-6 col-sm-6 col-md-3 col-lg-3">
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
          Displaying {num_results} matching images.
        </div>

        <div>
          {html}
        </div>

      </div>
    );
  };
};
