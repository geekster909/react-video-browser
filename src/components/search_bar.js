import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return <input type="text" onChange={event => console.log(event.target.value)} />;
	}
}

export default SearchBar;