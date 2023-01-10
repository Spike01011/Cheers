import React, {useEffect, useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import GetIdea from "./GetIdea";

const HomeTest = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get("https://localhost:7021/idea/index", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
				const responseJson = await response.data;
				await setData(responseJson);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);


	return data != null ? (
		<div className="container" style={{maxHeight: "650px"}}>
			<Row className="no-gutters" style={{marginInline: "10px", marginTop: "10px"}}>
				{data.map((idea) => (
					<Col xs lg='3'
						 style={{display: "inline-block", maxHeight: 350, maxWidth: 350, marginTop: "10px"}}>
						<GetIdea parentToChild={idea}/>
					</Col>
				))}
			</Row>
		</div>

	) : (
		<p>Loading...</p>
	);
};
export default HomeTest;
