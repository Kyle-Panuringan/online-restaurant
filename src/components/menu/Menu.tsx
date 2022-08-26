import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import CategoryButtons from "../categoryButtons/CategoryButtons";
import Food from "../foods/Food";
import "./menu.scss";

const Menu = () => {
	const { foods } = useAppSelector((state) => state.products);
	const categories = [
		"all",
		...Array.from(new Set(foods.map((food) => food.type))),
	];

	return (
		<div className="menu">
			<h2>~ Menu ~</h2>
			<hr id="menu-line" />
			<div className="menu-buttons">
				<CategoryButtons categories={categories} />
			</div>
			{foods.map((food, index) => {
				return <Food key={index} food={food} />;
			})}
		</div>
	);
};

export default Menu;
