// React
import React from 'react';

// Other components.
import Jumbotron from './Jumbotron.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';


export default class App extends React.Component {

  // Component constructor
  constructor(props) {
    super(props);

    // Bind methods to component instance/
    this.handleUpdateSearchResults = this.handleUpdateSearchResults.bind(this);

    // Default state.
    this.state = {
      latestResults: null // Latest
    };
  };

  // Callback to store search results in state.
  handleUpdateSearchResults(newState) {
    this.setState({
      latestResults: newState
    });
  };

  // Component render.
  render() {
    return (
      <div>
        <Jumbotron/>
        <Search updateSearchResults={this.handleUpdateSearchResults}/>
        <Results results={this.state.latestResults}/>
      </div>
    );
  };
};
