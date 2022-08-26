import burger_beef from "../images/burger_beef.jpg";
import burger_chicken from "../images/burger_chicken.jpg";
import pizza_pepperoni from "../images/pizza_pepperoni.jpg";
import pizza_veggie from "../images/pizza_veggie.jpg";
import pasta_spaghetti from "../images/pasta_spaghetti.jpg";
import pasta_carbonara from "../images/pasta_carbonara.jpg";
import dessert_icecream from "../images/dessert_icecream.jpg";
import dessert_shortcake from "../images/dessert_shortcake.jpg";

const foods = [
	{
		type: "burger",
		name: "Beef Burger",
		price: 300,
		image: burger_beef,
	},
	{
		type: "burger",
		name: "Chicken Burger",
		price: 300,
		image: burger_chicken,
	},
	{
		type: "pizza",
		name: "Pepperoni Pizza",
		price: 500,
		image: pizza_pepperoni,
	},
	{
		type: "pizza",
		name: "Veggie Pizza",
		price: 500,
		image: pizza_veggie,
	},
	{
		type: "pasta",
		name: "Spaghetti",
		price: 200,
		image: pasta_spaghetti,
	},
	{
		type: "pasta",
		name: "Carbonara",
		price: 200,
		image: pasta_carbonara,
	},
	{
		type: "dessert",
		name: "Ice Cream",
		price: 100,
		image: dessert_icecream,
	},
	{
		type: "dessert",
		name: "Shortcake",
		price: 100,
		image: dessert_shortcake,
	},
];

export default foods;
