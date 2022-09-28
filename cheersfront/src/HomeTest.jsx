import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Api from "./Utils/Api";

const HomeTest = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const get = async () => {
			try {
				const response = await Api.get("/");
				const responseJson = await response.data;
				await setData(responseJson);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);

	return data.length > 0 ? (
		<>
			{data.map((x) => (
				<p key={x.Id}>{x.Name}</p>
			))}
		</>
	) : (
		<p>Loading...</p>
	);
};

export default HomeTest;
