import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<header>
				<Navbar />
			</header>
		</div>
	);
}

export default App;
