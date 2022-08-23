import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="app">
			<header>
				<h1>Online Restaurant</h1>
				<Navbar />
			</header>
			<Hero />
		</div>
	);
}

export default App;
