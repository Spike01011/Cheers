import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddIdea() {
	const url = "https://localhost:7021/home/addidea";
	const [cat, setCat] = useState([]);
	// const [formatedCat, setFormatedCat] = useState([]);
	const [data, setData] = useState({
		Name: "",
		Description: "",
		ShortDescription: "",
		CategoryId: "",
		Target: "",
	});
	const navigate = useNavigate();
	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(
					"https://localhost:7021/home/GetCategories"
				);
				const responseData = await response.data;
				console.log("responseData", responseData);
				setCat(responseData);
				// const tempFormatedCat = [];
				// cat.forEach(e => {
				//     tempFormatedCat.push(<select key={e.id} value={e.id}>{e.name}</select>);
				// });
				// console.log("formatCat", tempFormatedCat);
				// setFormatedCat(tempFormatedCat);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);

	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Name: data.Name,
				Description: data.Description,
				ShortDescription: data.ShortDescription,
				/* global BigInt */
				Target: BigInt(data.Target),
				CategoryId: parseInt(data.CategoryId),
			})
			.then((res) => {
				console.log(res.data);
				navigate("/");
			});
	}

	return cat != null ? (
		<div>
			<form>
				<input
					onChange={(e) => handle(e)}
					id={"Name"}
					value={data.Name}
					placeholder={"Name"}
					type={"text"}
				/>
				<input
					onChange={(e) => handle(e)}
					id={"Description"}
					value={data.Description}
					placeholder={"Description"}
					type={"text"}
				/>
				<input
					onChange={(e) => handle(e)}
					id={"ShortDescription"}
					value={data.ShortDescription}
					placeholder={"ShortDescription"}
					type={"text"}
				/>
				<input
					onChange={(e) => handle(e)}
					id={"Target"}
					value={data.Target}
					placeholder={"MoneyTarget"}
					type={"text"}
				/>
				<select
					onChange={(e) => handle(e)}
					id={"CategoryId"}
					value={data.CategoryId}
					placeholder={"Category"}
				>
					{cat.map((c) => (
						<option key={c.id} value={c.id}>
							{c.name}
						</option>
					))}
				</select>
				<button onClick={(e) => submit(e)}>Submit</button>
			</form>
		</div>
	) : (
		<p>Loading...</p>
	);
}
