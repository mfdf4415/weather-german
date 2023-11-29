import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './src/WeatherApp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<WeatherApp />
	</React.StrictMode>
);
