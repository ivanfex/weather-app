import axios from 'axios';

const dailyWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
const tail = '&appid=a4b207db19a7d887e121b8e8667c496c'

const fiveDayWeather = 'https://api.openweathermap.org/data/2.5/forecast?q='
const fiveDayTail = '&cnt=5'

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;
