import React, { useEffect, useState } from "react";
import Api from "../Utils/Api";
import { Link } from "react-router-dom";

const Home = () => {
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

	return data != null ? (
		<>
			{data.map((x) => (
				<p key={x.Id}>
					<Link
						style={{ color: "black" }}
						to={`/get-details/${x.Id}`}
					>
						{x.Name}
					</Link>
				</p>
			))}
		</>
	) : (
		<p>Loading...</p>
	);
};

export default Home;
