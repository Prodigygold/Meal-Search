import React from 'react'

class SearchApp extends React.Component {
  state = {
    searchValue: '',
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  handleSearch = () => {
  }
  render() {
    return (
      <div><h1>Welcome to the meal search app</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        /><button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}
export default SearchApp;