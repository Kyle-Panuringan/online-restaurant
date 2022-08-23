import "./home.scss";
const Home = () => {
	return (
		<div className="home">
			<h2>
				<i>"Bon Appétit"</i>
				<br />
				<i>At</i>
				<br />
				<i>Online Restaurant</i>
			</h2>
			<button>View Menu</button>
			<span id="arrow-indicator">︽</span>
		</div>
	);
};

export default Home;
