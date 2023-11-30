import React, { useState } from 'react';
import apiRequests from '../Services/Axios/Configs.jsx';
import datas from '../datas';
import { WeatherInfo } from './WeatherInfo';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useAppContext } from './context/AppContext.jsx';
<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	strokeWidth={1.5}
	stroke="currentColor"
	className="w-6 h-6"
>
	<path
		strokeLinecap="round"
		strokeLinejoin="round"
		d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
	/>
</svg>;

export function Weather() {
	const { showAside, addFavoriteItem, changeShowAside } = useAppContext();
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
		setSuggestion([]);
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
		setName(res.data.city.name);
		setCountry(res.data.city.country);
		// const threeDayForecast = res.data.list.filter((forecast) => {
		// 	const forecastDate = new Date(forecast.dt_txt);
		// 	const currentDate = new Date();
		// 	const diffInDays = Math.floor(
		// 		(forecastDate - currentDate) / (1000 * 60 * 60 * 24)
		// 	);
		// 	return diffInDays >= 0 && diffInDays < 3;
		// });
		const fiveDayForecast = res.data.list.filter((day) => {
			const forecatDay = new Date(day.dt_txt).getHours();
			return forecatDay === 6;
		});
		setWeatherDatas(fiveDayForecast);

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
		<>
			{/* {Liste der Städte} */}
			<ul className={`list ${showAside ? 'show' : ''}`}>
				<p>Liste der Städte</p>
				{datas.germanCities.map((cityName, index) => (
					<li key={index}>
						<button
							onClick={() => {
								changeShowAside(false);
								getWeatherData(cityName);
							}}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									getWeatherData(cityName);
								}
							}}
						>
							{cityName}
						</button>
						<span
							onClick={() => {
								addFavoriteItem({ name: cityName, id: new Date().getTime() });
							}}
						>
							<HeartIcon className="add-icon" />
						</span>

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
					{suggestion.length !== 0 && (
						<div className="auto-complete">
							<ul>
								{suggestion.map((item, index) => (
									<li key={index} onClick={() => getWeatherData(item)}>
										{item}
									</li>
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
		</>
	);
}
