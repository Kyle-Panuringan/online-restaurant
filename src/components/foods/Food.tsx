import "./food.scss";

interface FoodProps {
	food: {
		type: string;
		name: string;
		price: number;
		image: string;
	};
}

const Food: React.FC<FoodProps> = ({ food }) => {
	return (
		<div className="food">
			<div className="food-image-container">
				<img src={food.image} alt={food.name} />
			</div>
			<p>{food.name}</p>
		</div>
	);
};

export default Food;
