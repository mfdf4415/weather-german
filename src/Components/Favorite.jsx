import { useAppContext } from './context/AppContext';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import apiRequests from '../Services/Axios/Configs';
import { WeatherInfo } from './WeatherInfo';

const Favorite = () => {
	const { favorite, removeFavoriteItem, showAside, changeShowAside } =
		useAppContext();
	const [todayWeather, setTodayWeather] = useState(null);
	const [country, setCountry] = useState('');
	const [name, setName] = useState('');
	const [weatherDatas, setWeatherDatas] = useState(null);

	const getWeatherData = async (cityName) => {
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
		const fiveDayForecast = res.data.list.filter((day) => {
			const forecatDay = new Date(day.dt_txt).getHours();
			return forecatDay === 6;
		});
		setWeatherDatas(fiveDayForecast);
		// const threeDayForecast = res.data.list.filter((forecast) => {
		// 	const forecastDate = new Date(forecast.dt_txt);
		// 	const currentDate = new Date();
		// 	const diffInDays = Math.floor(
		// 		(forecastDate - currentDate) / (1000 * 60 * 60 * 24)
		// 	);
		// 	return diffInDays >= 0 && diffInDays < 3;
		// });
	};

	return favorite ? (
		<>
			<ul className={`list ${showAside ? 'show' : ''}`}>
				<p>Liste der favorite</p>
				{favorite.map((item) => (
					<li key={item.id}>
						<button
							onClick={() => {
								changeShowAside(false);
								getWeatherData(item.name);
							}}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									getWeatherData(item.name);
								}
							}}
						>
							{item.name}
						</button>
						<span onClick={() => removeFavoriteItem(item.id)}>
							<TrashIcon className="add-icon" />
						</span>
					</li>
				))}
			</ul>

			{todayWeather ? (
				<div className="app-wrap">
					{weatherDatas && (
						<div className="favorite-info">
							<WeatherInfo
								todayWeather={todayWeather}
								weatherDatas={weatherDatas}
								name={name}
								country={country}
							/>
							<div className="condition-wrap">
								<span className="condition-title">AIR CONDITIONS</span>
								<div className="condition-items">
									<div>
										<TrashIcon />
										<div className="condition-info">
											<div>humidity</div>
											<span>{todayWeather.main.humidity}</span>
										</div>
									</div>
									<div>
										<TrashIcon />
										<div className="condition-info">
											<div>pressure</div>
											<span>{todayWeather.main.pressure}</span>
										</div>
									</div>
									<div>
										<TrashIcon />
										<div className="condition-info">
											<div>wind speed</div>
											<span>{todayWeather.wind.speed} km/h</span>
										</div>
									</div>
									<div>
										<TrashIcon />
										<div className="condition-info">
											<div>wind degree</div>
											<span>{todayWeather.wind.deg}</span>
										</div>
									</div>
									<div>
										<TrashIcon />
										<div className="condition-info">
											<div>visibility</div>
											<span>{todayWeather.visibility}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="app-wrap">
					<p className="alert">
						{favorite.length === 0
							? 'your favorite is empty :-('
							: 'select one of favrites :-)'}{' '}
					</p>
				</div>
			)}
		</>
	) : (
		<div className="app-wrap">
			<p className="alert">your favorite list is empty</p>
		</div>
	);
};

export default Favorite;
