import axios from "axios";
import {useEffect, useState} from "react";

export default function AdminPage(){
	const url = "https://localhost:7021/Home/AdminPage";
	const [data, setData] = useState();

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(url, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
				const responseData = await response.data;
				setData(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);

	return(
		<div>{data}</div>
	);
}
