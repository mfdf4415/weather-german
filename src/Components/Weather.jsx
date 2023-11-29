import React, { useState } from 'react';
import apiRequests from '../Services/Axios/Configs.jsx';
import datas from '../datas';
import { WeatherInfo } from './WeatherInfo';
import bgPhoto from '../../public/pexels-pixabay-209831.jpg';

export function Weather() {
	const [suggestion, setSuggestion] = useState([]);
	const [todayWeather, setTodayWeather] = useState(null);
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [name, setName] = useState('');
	const [weatherDatas, setWeatherDatas] = useState(null);
	const [favorites, setFavorites] = useState([]);
	const [lastSearchedCity, setLastSearchedCity] = useState('');
	// Daten von der api auslesen
	const getWeatherData = async (cityName) => {
		setSuggestion([])
		const res = await apiRequests.get('/data/2.5/forecast', {
			params: {
				q: cityName,
				appid: 'a3d6eb27922bfad30e5e7c8efd22239b',
			},
		});
		const cityRes = await apiRequests.get('/data/2.5/weather', {
			params: {
				q: cityName,
				appid: 'a3d6eb27922bfad30e5e7c8efd22239b',
			},
		});
		setTodayWeather(cityRes.data);
		console.log(cityRes.data);
		console.log(res.data);
		console.log(setFavorites);
		setName(res.data.city.name);
		setCountry(res.data.city.country);
		const threeDayForecast = res.data.list.filter((forecast) => {
			const forecastDate = new Date(forecast.dt_txt);
			const currentDate = new Date();
			const diffInDays = Math.floor(
				(forecastDate - currentDate) / (1000 * 60 * 60 * 24)
			);
			return diffInDays >= 0 && diffInDays < 3;
		});
		setWeatherDatas(threeDayForecast);
		console.log(threeDayForecast);

		setLastSearchedCity(cityName);
		setCity('');
		// toggleFavorite(res.data.city.name);
	};
	// Such Input Funktion
	const inputHandler = (event) => {
		if (event.key === 'Enter') {
			getWeatherData(city);
			setSuggestion([]);
		}
		setSuggestion(
			datas.cities
				.filter((city) =>
					city
						.toLocaleLowerCase()
						.includes(event.target.value.toLocaleLowerCase())
				)
				.slice(0, 10)
		);
	};
	// // favoriten Funktion
	// const toggleFavorite = (cityName) => {
	// 	if (favorites.includes(cityName)) {
	// 		setFavorites(favorites.filter((city) => city !== cityName));
	// 	} else {
	// 		setFavorites([...favorites, cityName]);
	// 	}
	// };
	const addFavorite = (cityName) => {
		if (!favorites.includes(cityName)) {
			setFavorites([...favorites, cityName]);
			console.log('Favorit hinzugefügt:' + cityName);
		}
	};
	const removeFavorite = (cityName) => {
		if (favorites.includes(cityName)) {
			setFavorites(favorites.filter((city) => city !== cityName));
		}
	};

	return (
		<div className="container">
			{/* {Liste der Städte} */}
			<ul className="list">
				<p>Liste der Städte</p>
				{datas.germanCities.map((cityName, index) => (
					<li key={index}>
						<button
							onClick={() => getWeatherData(cityName)}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									getWeatherData(cityName);
								}
							}}
						>
							{cityName}
						</button>
						{/* <button onClick={() => addFavorite(cityName)}>Hinzufügen</button> */}

						{/* <button onClick={() => removeFavorite(cityName)}>Entfernen</button> */}
					</li>
				))}
			</ul>

			{/* Such Bereich */}
			<div className={`app-wrap ${weatherDatas ? 'padding' : ''}`}>
				<h3>Wetter in Ihrer Stadt</h3>
				<div className="search-box">
					<input
						type="text"
						autoComplete="off"
						className="search-box"
						placeholder="Suche nach einer Stadt"
						value={city}
						onChange={(event) => setCity(event.target.value)}
						onKeyUp={inputHandler}
					/>
					<button onClick={() => addFavorite(lastSearchedCity)}>
						Hinzufügen
					</button>
					{suggestion.length !== 0 && (
						<div className="auto-complet">
							<ul>
								{suggestion.map((item) => (
									<li onClick={() => getWeatherData(item)}>{item}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* <button onClick={() => removeFavorite(city)}>Entfernen</button> */}
				{/* Wetter Info */}
				{weatherDatas && (
					<WeatherInfo
						todayWeather={todayWeather}
						weatherDatas={weatherDatas}
						name={name}
						country={country}
					/>
				)}
			</div>
			{/* FavoritenListe */}
			{/* <div className={`app-wrap ${favorites.length ? 'padding' : ''}`}>
				<h3>Favoriten</h3>
				<ul className="list">
					{favorites.map((favoriteCity, index) => (
						<li key={index}>
							<button
								onClick={() => getWeatherData(favoriteCity)}
								onKeyDown={(event) => {
									if (event.key === 'Enter') {
										getWeatherData(favoriteCity);
									}
								}}
							>
								{favoriteCity}
							</button>
							<button onClick={() => removeFavorite(favoriteCity)}>
								Entfernen
							</button>
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
}
