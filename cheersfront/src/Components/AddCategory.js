import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCategory(){
	const url = "https://localhost:7021/home/AddCategory";
	// const [formatedCat, setFormatedCat] = useState([]);
	const [data, setData] = useState({
		Name: "",
	});
	const navigate = useNavigate();


	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Name: data.Name,
			})
			.then((res) => {
				navigate("/");
			});
	}

	return(
		<div>
			<form>
				<input onChange={(e) => handle(e)} id={"Name"} value={data.Name} placeholder={"Name"} type={"text"}/>
				<button onClick={(e) => submit(e)}>Submit</button>
			</form>
		</div>
	)
}