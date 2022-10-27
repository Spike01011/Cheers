import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Logout() {
	const url = "https://localhost:7021/account/logout";
	const navigate = useNavigate();
	axios.get(url);
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	window.dispatchEvent(new Event("storage"));
	return navigate("/");
}
