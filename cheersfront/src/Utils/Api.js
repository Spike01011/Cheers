import axios from "axios";

export default axios.create({
	// baseURL: "https://localhost:7152/WeatherForecast",
	baseURL: "https://localhost:7021",

	//   responseType: "json",
	method: "GET",
	// transformResponse: []
});
