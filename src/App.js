import "./App.css";
import React, { useEffect, useState } from "react";
// import axios from "axios";

// const reactURL = "https://api.openweathermap.org/data/2.5";
// const reactApiKey = "61408d25b86704805e8723ba1bb0eb5";
// const reactImg = "https://openweathermap.org/img/w";
function App() {
	const [lat, setLat] = useState([0]);
	const [long, setLong] = useState([0]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiKey = "61408d25b86704805e8723ba1bb0eb5f";
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setData(data.weather[0].main);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		if (lat && long) {
			fetchData();
		}
	}, [lat, long]);

	return (
		<div className="App">
			<h1>Latitude: {lat}</h1>
			<h1>Longitude: {long}</h1>
			<h1>Weather: {data}</h1>
		</div>
	);
}

export default App;

// 	const fetchData = async () => {
// 		navigator.geolocation.getCurrentPosition(function (position) {
// 			setLat(position.coords.latitude);
// 			setLong(position.coords.longitude);
// 		});

// 		// await fetch(
// 		// 	`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=61408d25b86704805e8723ba1bb0eb5`
// 		// )
// 		// 	.then((res) => res.json())
// 		// 	.then((result) => {
// 		// 		setData(result);
// 		// 		console.log(result);
// 		// 	});
// 		try {
// 			const response = await axios.get(
// 				`https://api.openweathermap.org/data/2.5/weather?lat=53.47258&lon-2.2386062&appid=61408d25b86704805e8723ba1bb0eb5f`
// 			);
// 			setData(response.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	fetchData();
// }, [lat, long]);
// console.log("Lat: " + lat, "Long: " + long);
// console.log(data);
