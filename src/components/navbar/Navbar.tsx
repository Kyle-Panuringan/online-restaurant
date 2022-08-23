import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/" id="navbar-header">
				<h1>Online Restaurant</h1>
			</Link>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
