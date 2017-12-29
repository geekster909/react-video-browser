import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCK0kjeDkQvEbyZyQicRnd_MjGEyDvW-FQ';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);
