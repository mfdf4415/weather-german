import React, { memo, useMemo } from 'react';
import datas from '../datas.jsx';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useAppContext } from './context/AppContext.jsx';

const WeatherInfoComponent = ({
	todayWeather,
	weatherDatas,
	name,
	country,
}) => {
	const { addFavoriteItem } = useAppContext();
	const showDate = useMemo(() => {
		const now = new Date();
		const day = datas.days[now.getDay()];
		const month = datas.months[now.getMonth()];
		const year = now.getFullYear();
		const date = now.getDate();
		return `${day} ${date} ${month} ${year}`;
	}, []);
	return (
		<main>
			<section className="location">
				<div className="city">
					<div>
						{name}, {country}{' '}
						<HeartIcon
							onClick={() =>
								addFavoriteItem({ name: name, id: new Date().getTime() })
							}
						/>
					</div>
					<div className="date">{showDate}</div>
				</div>
				<span className="city-temp">
					{Math.floor(todayWeather.main.temp - 273.15)}°c
				</span>
				<span className="state">
					{todayWeather.weather[0].main}
					<br />
					{Math.floor(todayWeather.main.temp_min - 273.15)}°c /{' '}
					{Math.floor(todayWeather.main.temp_max - 273.15)}°c
				</span>
			</section>
			<div className="current-wraper">
				{weatherDatas.map((weatherData) => (
					<div className="current" key={weatherData.dt_txt}>
						<div className="date">
							{new Date(weatherData.dt_txt).toLocaleDateString('en-US', {
								weekday: 'long',
							})}
						</div>
						<div className="temp">
							<img
								src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
								className="icon"
							/>
							{/* {Math.floor(weatherData.main.temp - 273.15)}
							<span>°c</span> */}
						</div>
						<div className="weather">{weatherData.weather.main}</div>
						<div className="hi-low">
							{Math.floor(weatherData.main.temp - 273.15)}°c
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

WeatherInfoComponent.displayName = 'WeatherInfo';

export const WeatherInfo = memo(WeatherInfoComponent);
