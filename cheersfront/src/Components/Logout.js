import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Logout() {
	const url = "https://localhost:7021/account/logout";
	const navigate = useNavigate();
	axios.get(url);
	// localStorage.clear()
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	localStorage.removeItem("isAdmin");
	window.dispatchEvent(new Event("storage"));
	return navigate("/login");
}
