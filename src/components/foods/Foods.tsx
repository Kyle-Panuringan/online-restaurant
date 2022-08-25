import foods from "../../assets/foods";

const Foods = () => {
	console.log(foods.map((food) => food.name));
	return <div>Foods</div>;
};

export default Foods;
