import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/CustomNavbar";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<CustomNavbar />
				<main id="main"></main>
			</BrowserRouter>
		</>
	);
}

export default App;
