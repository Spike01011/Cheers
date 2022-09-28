import React, { Component } from "react";
import { logDOM } from "@testing-library/react";
import Api from "./Utils/Api";

class TestComponentReact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	fetchData = async () => {
		let response = await fetch(`https://localhost:7152/WeatherForecast`, {
			// headers: {
			//     "Acces-Control-Allow-Origin": "*",
			//     "Acces-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
			// },
			Component: "include",
			method: "GET",
			mode: "no-cors",
		});
		var ultimateRespone = await response.json();
		console.log(ultimateRespone);
		return await response.json();
	};

	componentDidMount() {
		// fetch(
		//     "https://localhost:7021/home/privacy", {
		//         Component: "include",
		//         method: "GET",
		//     })
		//     .then((response) => response.json())
		//     .then((result) => {
		//         console.log(result)
		//         this.setState({
		//             items: result,
		//             DataisLoaded: true
		//         });
		//     })

		this.fetchData();
	}

	render() {
		return (
			<div>
				<h2>Ana, de ce nu mergi?</h2>
				{/*<h2>{this.fetchData().name}</h2>*/}
				{/*<h2>{this.fetchData().age}</h2>*/}
				{/*<h2>{this.state.items.name}</h2>*/}
				{/*<h2>{this.state.items.age}</h2>*/}
				{this.state.items.map((elem) => (
					<div>
						<h3>{elem.name}</h3>
						<h3>{elem.age}</h3>
					</div>
				))}
			</div>
		);
	}
}

export default TestComponentReact;
