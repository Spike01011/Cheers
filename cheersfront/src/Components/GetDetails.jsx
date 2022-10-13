import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
		<div className={"DetailsDiv"}>
			{/*{data.map((x) => (*/}
			{/*	<div key={x.Id}>*/}
			{/*		<h1 key={`${x.Id}h1`}>{x.Name}</h1>*/}
			{/*		<p key={`${x.Id}Name`}>Category: {x.Category}</p>*/}
			{/*		<p key={`${x.Id}Desc`}>{x.Description}</p>*/}
			{/*	</div>*/}
			{/*))}*/}
			<h1
				className={"TitleClass"}
				style={{
					textAlign: "center",
					paddingInline: "10%",
					marginBottom: "50px",
				}}
			>
				{data.Name}
			</h1>
			<h3>Category</h3>
			<h5 className={"DetailsDivContents"}>{data.Category.Name}</h5>
			<h3>Description</h3>
			<h5 className={"DetailsDivContents"}>{data.Description.split("\n").map(x => <p>{x}</p>)}</h5>
			<h4>TL;DR</h4>
			<h6 className={"DetailsDivContents"}>{data.ShortDescription}</h6>
			<h3>Target amount: {data.Target}</h3>
			<div
				style={{
					textAlign: "center",
					marginTop: "50px",
				}}
			>
				<button
					style={{ textAlign: "center" }}
					as={Link}
					to=""
					className={"btn btn-light"}
				>
					🍻 Buy us a beer
				</button>
				<Link
				type={"button"}
				style={{textAlign: "center"}}
				to={`/add-photo/${id}`}
				className={"btn btn-light"}>
					AddPhoto
				</Link>
			</div>
		</div>
	) : (
		<p>Loading...</p>
	);
}
