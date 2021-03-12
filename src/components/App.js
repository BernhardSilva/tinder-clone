import '../css/App.css';
import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
	return (
		//BEM clas naming convention
		<div className="app">
			<Header />
			<TinderCards />
			<SwipeButtons />
		</div>
	);
}

export default App;
