import React from 'react';
import './global.styles.scss';
import { HomePage } from './shared/HomePage';
import { Routes, Route } from 'react-router-dom';
import { SinglePage } from './shared/SinglePage';
import { NotFound } from './shared/NotFound';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/user/:login" element={<SinglePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
