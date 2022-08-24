import "./menu.scss";

const Menu = () => {
	return (
		<div className="menu">
			<h2>~ Menu ~</h2>
			<hr id="menu-line" />
			<div className="menu-buttons">
				<button>All</button>
				<button>Burger</button>
				<button>Pizza</button>
				<button>Pasta</button>
				<button>Dessert</button>
			</div>
		</div>
	);
};

export default Menu;
