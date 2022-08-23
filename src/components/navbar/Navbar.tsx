import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>Online Restaurant</h1>
			<ul>
				<li>
					<a href="#">Menu</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">About Us</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
