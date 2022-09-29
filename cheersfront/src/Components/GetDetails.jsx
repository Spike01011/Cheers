import axios from "axios";
import { useEffect, useState } from "react";

export default function GetDetails() {
	const url = "https://localhost:7021/home/GetIdea";
	const reactUrl = window.location.href;
	const reactUrlLength = reactUrl.split("/").length;
	const id = reactUrl.split("/").at(reactUrlLength - 1);
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(`${url}/${id}`);
				const responseData = await response.data;
				console.log("responseData: ", responseData);
				setData(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);
	return data != null ? (
		<div>
			{/*{data.map((x) => (*/}
			{/*	<div key={x.Id}>*/}
			{/*		<h1 key={`${x.Id}h1`}>{x.Name}</h1>*/}
			{/*		<p key={`${x.Id}Name`}>Category: {x.Category}</p>*/}
			{/*		<p key={`${x.Id}Desc`}>{x.Description}</p>*/}
			{/*	</div>*/}
			{/*))}*/}
			<h1>{data.Name}</h1>
			<p>Category: {data.Category.Name}</p>
			<p>{data.Description}</p>
		</div>
	) : (
		<p>Loading...</p>
	);
}
