import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function EditIdea() {
	const url = "https://localhost:7021/idea/editidea";
	const dataUrl = "https://localhost:7021/idea/GetIdea";
	const [cat, setCat] = useState([]);
	const categoryUrl = "https://localhost:7021/category/GetCategories";
	const [data, setData] = useState({
		Name: "",
		Description: "",
		ShortDescription: "",
		CategoryId: "",
		Target: "",
	});
	const reactUrl = window.location.href;
	const reactUrlLength = reactUrl.split("/").length;
	const id = reactUrl.split("/").at(reactUrlLength - 1);
	const navigate = useNavigate();

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(
					categoryUrl, {
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`
						}
					}
				);
				const responseData = await response.data;
				setCat(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);

	useEffect(() => {
		try {
			axios.get(`${dataUrl}/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}).then(
				response => {
					setData({
						Name: response.data.Name,
						Description: response.data.Description,
						ShortDescription: response.data.ShortDescription,
						CategoryId: response.data.CategoryId,
						Target: response.data.Target
					})
				}
			);
		} catch (e) {
			console.error(e)
		}

	}, [])

	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.put(`${url}/${id}`, {
				Name: data.Name,
				Description: data.Description,
				ShortDescription: data.ShortDescription,
				CategoryId: parseInt(data.CategoryId),
				/* global BigInt */
				Target: parseInt(data.Target),
				Token: localStorage.getItem("token")
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then((res) => {
				navigate("/");
			});
	}

	return cat != null && data != null ?

		<form className={"DetailsDiv"}
			  style={{display: "flex", flexDirection: "column"}}>
			<h1
				className={"TitleClass"}
				style={{
					textAlign: "center",
					paddingInline: "10%",
					marginBottom: "50px",
				}}>
				Edit Idea
			</h1>
			<input className={"DetailsDivContents"}
				   onChange={(e) => handle(e)}
				   id={"Name"}
				   value={data.Name}
				   placeholder={"Name"}
				   type={"text"}
				   style={{width: "250px"}}/>
			<select className={"DetailsDivContents"}
					style={{width: "250px"}}
					onChange={(e) => handle(e)}
					id={"CategoryId"}
					value={data.CategoryId}
					placeholder={"Category"}>
				{cat.map((c) => (
					<option key={c.id} value={c.id}>
						{c.name}
					</option>
				))}
			</select>
			<input className={"DetailsDivContents"}
				   style={{width: "250px"}}
				   onChange={(e) => handle(e)}
				   id={"Target"}
				   value={data.Target}
				   placeholder={"MoneyTarget"}
				   type={"text"}/>
			<input className={"DetailsDivContents"}
				   onChange={(e) => handle(e)}
				   id={"ShortDescription"}
				   value={data.ShortDescription}
				   placeholder={"ShortDescription"}
				   type={"text"}/>
			<textarea
				className={"DetailsDivContents"}
				onChange={(e) => handle(e)}
				id={"Description"}
				value={data.Description}
				placeholder={"Description"}/>

			<button className={"btn btn-info align-self-md-center"} onClick={(e) => submit(e)}
					style={{width: "100px"}}>Submit
			</button>
		</form>
		:
		<p>Loading...</p>
}
